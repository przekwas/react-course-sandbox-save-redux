const { createStore, combineReducers } = require('redux');

// action types
const INCREMENT = 'count/increment';
const DECREMENT = 'count/decrement';
const INCREMENT_BY = 'INCREMENT_BY';
const DECREMENT_BY = 'DECREMENT_BY';

const TOGGLE_THEME = 'TOGGLE_THEME';

const ADD_MESSAGE = 'ADD_MESSAGE';

// action creator
const incrementOne = () => {
	return { type: INCREMENT };
};

const decrementOne = () => {
	return { type: DECREMENT };
};

const incrementBy = payload => {
	return {
		type: INCREMENT_BY,
		payload
	};
};

const decrementBy = payload => ({
	type: DECREMENT_BY,
	payload
});

const toggleTheme = () => {
	return {
		type: TOGGLE_THEME
	};
};

const addMessage = payload => {
	return {
		type: ADD_MESSAGE,
		payload
	};
};

// reducers

const initialCountState = 0;
const countReducer = (state = initialCountState, action) => {
	switch (action.type) {
		case INCREMENT:
			return state + 1;
		case DECREMENT:
			return state - 1;
		case INCREMENT_BY:
			return state + action.payload;
		case DECREMENT_BY:
			return state - action.payload;
		default:
			return state;
	}
};

const initialDarkThemeState = false;
const darkThemeReducer = (state = initialDarkThemeState, action) => {
	switch (action.type) {
		case TOGGLE_THEME:
			return !state;
		default:
			return state;
	}
};

const initialMessagesState = [];
const messagesReducer = (state = initialMessagesState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return [action.payload, ...state];
		default:
			return state;
	}
};

// root reducer
const rootReducer = combineReducers({
	count: countReducer,
	darkTheme: darkThemeReducer,
	messages: messagesReducer
});

// creating the store
const store = createStore(rootReducer);

store.subscribe(() => {
	console.log('current state', store.getState());
});

store.dispatch(incrementOne());
store.dispatch(decrementOne());
store.dispatch(incrementBy(10));
store.dispatch(decrementBy(5));
store.dispatch(toggleTheme());
store.dispatch(addMessage('wow'));
store.dispatch(addMessage('das cool'));
