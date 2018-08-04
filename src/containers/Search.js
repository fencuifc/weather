import React, { Component } from "react";
import Search from "../components/Search";
import { connect } from "react-redux";
import {  fetchLoctions,selectLocation  } from "../actions";


export class SearchComponent extends Component {

  render() {
    return (
      <Search {...this.props}/>
    );
  }
};

export const mapStateToProps = state => {
  return {
    //isMenuOpen: state.isMenuOpen
    searchResult:state.searchResult,
    searchTerm:state.searchTerm
  };
};

export const mapDispatchToProps = dispatch =>{
	return{
		fetchLoctions: (searchTerm)=>{
			dispatch(fetchLoctions(searchTerm));
		},
    selectLocation: (id,searchTerm)=>{
      dispatch(selectLocation(id,searchTerm));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
