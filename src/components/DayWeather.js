import React, { Component } from "react";
import PropTypes from "prop-types";
import convert from "convert-units";
import moment from "moment";

class DayWeather extends Component {

	weatherIco = weatherStateAbbr => {
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

	tempFormat = fTemp => {
	return	convert(fTemp)
		.from("C")
		.to("F")
		.toFixed(0);
	};

	dateFormat = applicableDate =>{
		if (moment(applicableDate, "YYYY-MM-DD").isSame(moment(), "d")){
			return "Now";
		}else{
			return moment(applicableDate, "YYYY-MM-DD").format("ddd");
		}
	}

	render() {
		const { currentLocation } = this.props;

		const options = currentLocation.consolidated_weather.map(r => (
			<li key={r.id} className="weatherItem">
				<ul className="column">
					<li class={this.weatherIco(r.weather_state_abbr)} />
					<li className="temp">
						<span>{this.tempFormat(r.min_temp)}
						</span>
						<span>
							{this.tempFormat(r.max_temp)}
						</span>
					</li>
					<li className="date">{this.dateFormat(r.applicable_date)}</li>
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

export default DayWeather;