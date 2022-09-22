const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_BY = 'INCREMENT_BY';
const DECREMENT_BY = 'DECREMENT_BY';

const initialCountState = 0;

const reducer = (state = initialCountState, action) => {
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

export const incrementOne = () => {
	return { type: INCREMENT };
};

export const decrementOne = () => {
	return { type: DECREMENT };
};

export const incrementBy = payload => {
	return {
		type: INCREMENT_BY,
		payload
	};
};

export const decrementBy = payload => ({
	type: DECREMENT_BY,
	payload
});

export default reducer;