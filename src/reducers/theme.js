import { SELECT_THEME } from "../constants/ActionTypes";

const defaultTheme= {
  "selectedTheme": "theme0",
  "allThemes": [["theme0","theme1","theme2"],["theme3","theme4","theme5"],["theme6","theme7","theme8"]]
}

export default function reducer(state = defaultTheme , action) {
  switch (action.type) {
    case SELECT_THEME:
     return Object.assign({}, state, {selectedTheme:action.theme});
  }

  return state;
}