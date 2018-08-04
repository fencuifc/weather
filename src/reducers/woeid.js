import { SELECT_LOCATION } from "../constants/ActionTypes";

export default function reducer(state = "", action) {
  switch (action.type) {
  case SELECT_LOCATION: 
    return action.woeid;
  }

  return state;
}