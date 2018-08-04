import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
	constructor(props) {
		super(props);
	};
	state = { searchInput: this.props.searchTerm };
	handleOnChange = event => {
		this.setState({
			searchInput: event.target.value
		});

		this.props.fetchLoctions(event.target.value);
	};

	selectCity = event => {
		console.log(event.target);
		this.setState({
			searchInput: event.target.dataset.value
		});

		this.props.selectLocation(
			event.target.dataset.woeid,
			event.target.dataset.value
		);
	};

	render() {
		const { searchTerm, searchResult } = this.props;

		const options = searchResult.map(r => (
			<li
				key={r.woeid}
				onClick={this.selectCity}
				data-value={r.title}
				data-woeid={r.woeid}
			>
				{r.title}
			</li>
		));

		return (
			<div className="search">
				<form autoComplete="off">
					<div className="autoComplete">
						<span>Select a City</span>
						<input
							id="searchInput"
							name="searchInput"
							type="text"
							onChange={this.handleOnChange}
							value={this.state.searchInput}
						/>
						<ul>{options}</ul>
					</div>
				</form>
			</div>
		);
	}
};

Search.propTypes = {
	fetchLoctions: PropTypes.func.isRequired,
	selectLocation: PropTypes.func.isRequired,
	searchTerm: PropTypes.string
};

export default Search;
