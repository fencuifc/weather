import React, { Component } from "react";
import PropTypes from "prop-types";
import convert from "convert-units";
import moment from "moment";

class DayWeather extends Component {
	constructor(props) {
		super(props);
		this.weatherIco = weatherStateAbbr => {
			let iconMapping = {
				sn: "wi-day-snow",
				sl: "wi-day-sleet",
				h: "wi-day-hail",
				t: "wi-day-thunderstorm",
				hr: "wi-rain-wind",
				lr: "wi-day-rain",
				s: "wi-day-showers",
				hc: "wi-day-cloudy",
				lc: "wi-day-sunny-overcast",
				c: "wi-day-sunny"
			};
			return "wi " + iconMapping[weatherStateAbbr];
		};

		this.tempFormat = fTemp => {
			return convert(fTemp)
				.from("C")
				.to("F")
				.toFixed(0);
		};

		this.dateFormat = applicableDate => {
			if (moment(applicableDate, "YYYY-MM-DD").isSame(moment(), "d")) {
				return "Now";
			} else {
				return moment(applicableDate, "YYYY-MM-DD").format("ddd");
			}
		};
	}

	render() {
		const { currentLocation } = this.props;
		let currentWeather = currentLocation.consolidated_weather;
		if (currentWeather.length > 5) {
			currentWeather = currentWeather.pop();
		}

		const options = currentLocation.consolidated_weather.map(r => (
			<li key={r.id} className="weatherItem">
				<ul className="column">
					<li class={this.weatherIco(r.weather_state_abbr)} />
					<li className="temp">
						<span>{this.tempFormat(r.min_temp)}</span>
						<span>{this.tempFormat(r.max_temp)}</span>
					</li>
					<li className="date">
						{this.dateFormat(r.applicable_date)}
					</li>
					<li className="state">{r.weather_state_name}</li>
				</ul>
			</li>
		));

		return (
			<div className="weather">
				<ul class="weatherList">{options}</ul>
			</div>
		);
	}
}

DayWeather.propTypes = {
	consolidated_weather: PropTypes.arrayOf(
		PropTypes.shape({
			weather_state_abbr: PropTypes.string.isRequired,
			min_temp: PropTypes.number.isRequired,
			max_temp: PropTypes.number.isRequired,
			applicable_date: PropTypes.string.isRequired,
			weather_state_name: PropTypes.string.isRequired
		})
	)
};

export default DayWeather;
