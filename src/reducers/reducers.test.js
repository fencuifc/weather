import * as actionTypes from "../constants/ActionTypes";
import reducer from "../reducers";

describe("Test reducers", () => {
	//** Menu reducers **
	describe("Menu reducers", () => {
		it("Menu close", () => {
			expect(
				reducer({ isMenuOpen: true }, { type: actionTypes.TOGGLE_MENU })
			).toMatchObject({ isMenuOpen: false });
		});

		it("Menu open", () => {
			expect(
				reducer(
					{ isMenuOpen: false },
					{ type: actionTypes.TOGGLE_MENU }
				)
			).toMatchObject({ isMenuOpen: true });
		});
	});

	//** SearchResult reducers **
	describe("SearchResult reducer", () => {
		it("Receive result locations", () => {
			expect(
				reducer(
					{},
					{
						locations: [{ testlocation: "testlocation" }],
						type: actionTypes.RECEIVE_LOCATIONS
					}
				)
			).toMatchObject({
				searchResult: [{ testlocation: "testlocation" }]
			});
		});
	});

	//** SearchResult reducers **
	describe("SearchTerm reducer", () => {
		it("Update searchTerm", () => {
			expect(
				reducer(
					{ searchTerm: "new york" },
					{
						searchTerm: "phi",
						type: actionTypes.FETCH_LOCATIONS
					}
				)
			).toMatchObject({
				searchTerm: "phi"
			});
		});
	});

	//** currentLocation reducers **
	describe("CurrentLocation reducer", () => {
		it("Update currentLocation with weather info", () => {
			expect(
				reducer(
					{
						currentLocation: {
							consolidated_weather: [],
							parent: {}
						}
					},
					{
						location: {
							consolidated_weather: [
								{
									min_temp: 24.54,
									max_temp: 30.915
								}
							],
							parent: { title: "New York" }
						},
						type: actionTypes.RECEIVE_WEATHER
					}
				)
			).toMatchObject({
				currentLocation: {
					consolidated_weather: [
						{
							min_temp: 24.54,
							max_temp: 30.915
						}
					],
					parent: { title: "New York" }
				}
			});
		});
	});

	//** Theme reducers **
	describe("Theme reducer", () => {
		it("Update theme", () => {
			expect(
				reducer(
					{ theme: { selectedTheme: "theme0" } },
					{
						theme: "theme1",
						type: actionTypes.SELECT_THEME
					}
				)
			).toMatchObject({
				theme: { selectedTheme: "theme1" }
			});
		});
	});

	//** woeid reducers **
	describe("Woeid reducer", () => {
		it("Update Woeid", () => {
			expect(
				reducer(
					{ woeid: 2459115 },
					{
						woeid: 2459116,
						type: actionTypes.SELECT_LOCATION
					}
				)
			).toMatchObject({ woeid: 2459116 });
		});
	});
});
