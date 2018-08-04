import { TOGGLE_MENU } from "../constants/ActionTypes";

export const toggleMenu = () => {
	return dispatch => {
		return dispatch({
			type: TOGGLE_MENU
		});
	};
};
