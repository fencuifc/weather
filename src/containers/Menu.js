import React, { Component } from "react";
import Menu from "../components/Menu";
import { connect } from "react-redux";
import {toggleMenu} from "../actions/menuActions";

export class MenuComponent extends Component {

  render() {
    return (
      <Menu {...this.props}/>
    );
  }
};

export const mapStateToProps = state => {
  return {
    isMenuOpen: state.isMenuOpen
  };
};

export const mapDispatchToProps = dispatch =>{
	return{
		toggleMenu:()=>{
			dispatch(toggleMenu());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
