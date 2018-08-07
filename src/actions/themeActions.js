import * as actionTypes from "../constants/ActionTypes";

export const selectTheme = theme => {
	return dispatch => {
		return dispatch({
			type: actionTypes.SELECT_THEME,
			theme
		});
	};
};
