// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import { combineReducers } from "redux";

import theme from "./theme";
import currentLocation from "./currentLocation";
import searchTerm from "./searchTerm";
import searchResult from "./searchResult";
import isMenuOpen from "./menu";
import woeid from "./woeid";



export default combineReducers({theme, currentLocation,searchTerm,searchResult,isMenuOpen,woeid});