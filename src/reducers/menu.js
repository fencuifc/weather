import {TOGGLE_MENU} from "../constants/ActionTypes";

export default function reducer(state = false , action) {
  switch (action.type) {
  case TOGGLE_MENU: 
    return !state;
  }
  return state;
}