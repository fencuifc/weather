import * as actionTypes from "../constants/ActionTypes";

const defaultSearchResult = [];

export default function reducer(state = defaultSearchResult, action) {
  switch (action.type) {
  	case actionTypes.RECEIVE_LOCATIONS:
        return action.locations;
    default:
        return state;
  }
}