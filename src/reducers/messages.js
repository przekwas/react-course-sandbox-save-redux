const ADD_MESSAGE = 'ADD_MESSAGE';

const initialMessagesState = ['wow', 'omg'];

const reducer = (state = initialMessagesState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return [action.payload, ...state];
		default:
			return state;
	}
};

export const addMessage = payload => {
	return {
		type: ADD_MESSAGE,
		payload
	};
};

export default reducer;