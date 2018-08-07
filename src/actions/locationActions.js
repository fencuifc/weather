import * as actionTypes from "../constants/ActionTypes";

import axios from "axios";

export const fetchLoctions = searchTerm => {
	return dispatch => {
		dispatch({
			type: actionTypes.FETCH_LOCATIONS,
			searchTerm
		});
		return axios
			.get("/api/location/search/?query=" + searchTerm)
			.then(function(response) {
				console.log(response.data);
				dispatch(receiveLoctions(response.data));
			})
			.catch(function(error) {
				//not handled at moment, as no UI event after this error
				console.log("/api/location/search/ error");
				console.log(error);
			});
	};
};

export const receiveLoctions = locations => {
	return dispatch => {
		return dispatch({
			type: actionTypes.RECEIVE_LOCATIONS,
			locations
		});
	};
};



