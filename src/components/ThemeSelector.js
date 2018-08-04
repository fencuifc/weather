import React, { Component } from "react";
import PropTypes from "prop-types";

import Search from "../containers/Search";

class ThemeSelector extends Component {
	render() {
		const { themes, selectedTheme } = this.props;
		

		const createTable = (themes) => {
			
			let table=[];
			for(let i=0; i<3; i++){
				let childern = [];
				themes[i].forEach( (element)=>{
					childern.push(
						<td className={element} onClick={e =>{this.props.selectTheme(element)}}></td>)
				})

				table.push(<tr>{childern}</tr>)
			}
			return table;
			
		};

		return (
			<div className="theme">
				<h3>Theme</h3>
				<div class="themeSelector">
					<div>
					<table>{createTable(themes)}</table>
					</div>
				</div>
			</div>
		);
	}
};

ThemeSelector.propTypes = {
	themes: PropTypes.string.isRequired,
	selectedTheme: PropTypes.array.isRequired,
	selectTheme: PropTypes.func.isRequired
};

export default ThemeSelector;
