const TOGGLE_THEME = 'TOGGLE_THEME';

const initialDarkThemeState = false;

const reducer = (state = initialDarkThemeState, action) => {
	switch (action.type) {
		case TOGGLE_THEME:
			return !state;
		default:
			return state;
	}
};

export const toggleTheme = () => {
	return {
		type: TOGGLE_THEME
	};
};

export default reducer;