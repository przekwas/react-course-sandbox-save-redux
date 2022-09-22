import { combineReducers } from 'redux';

import countReducer from './count';
import darkThemeReducer from './theme';
import messagesReducer from './messages';

const rootReducer = combineReducers({
	count: countReducer,
	darkTheme: darkThemeReducer,
	messages: messagesReducer
});

export default rootReducer;
