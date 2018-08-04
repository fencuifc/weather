import React, { Component } from "react";
import ThemeSelector from "../components/ThemeSelector";
import { connect } from "react-redux";
import {selectTheme} from "../actions";

export class ThemeSelectorComponent extends Component {

  render() {
    return (
      <ThemeSelector {...this.props}/>
    );
  }
};

export const mapStateToProps = state => {
  return {
    themes: state.theme.allThemes,
    selectedTheme: state.theme.selectedTheme
  };
};

export const mapDispatchToProps = dispatch =>{
	return{
		selectTheme:(theme)=>{
			dispatch(selectTheme(theme));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSelector);
