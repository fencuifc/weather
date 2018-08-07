import * as actionTypes from "../constants/ActionTypes";
import {receiveLoctions} from "./locationActions"
import axios from "axios";

export const selectLocation = (woeid, city) => {
	return dispatch => {
		dispatch({
			type: actionTypes.SELECT_LOCATION,
			woeid
		});
		dispatch({
			type: actionTypes.FETCH_LOCATIONS,
			searchTerm: city
		});
		dispatch(receiveLoctions([]));
		return dispatch(fetchWeather(woeid));
	};
};

export const fetchWeather = woeid => {
	return dispatch => {
		return axios
			.get("/api/location/" + woeid + "/")
			.then(function(response) {
				console.log(response.data);
				dispatch(receiveWeather(response.data));
			})
			.catch(function(error) {
				//not handled at moment, as no UI event after this error
				console.log("/api/location/ error");
				console.log(error);
			});
	};
};

export const receiveWeather = location => {
	return dispatch => {
		return dispatch({
			type: actionTypes.RECEIVE_WEATHER,
			location
		});
	};
};