import * as actionTypes from "../constants/ActionTypes";

export default function reducer(state = "", action) {
  switch (action.type) {
   case actionTypes.FETCH_LOCATIONS: 
     return action.searchTerm;
  }

  return state;
}