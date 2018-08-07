import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../actions";
import * as actionTypes from "../constants/ActionTypes";
import mockAxios from "jest-mock-axios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// cleaning up the mess left behind the previous test
afterEach(() => {
	mockAxios.reset();
});

describe("Test actions", () => {
	//** Menu actions **
	describe("Menu actions", () => {
		it("TOGGLE_MENU action", () => {
			const expectedAction = {
				type: actionTypes.TOGGLE_MENU
			};
			const store = mockStore({});
			store.dispatch(actions.toggleMenu());
			expect(store.getActions()).toEqual([expectedAction]);
		});
	});
	//** Location actions **
	describe("Location actions", () => {
		it("FETCH_LOCATIONS and RECEIVE_LOCATIONS", () => {
			let catchFn = jest.fn(),
				thenFn = jest.fn();

			const mockData = [
				{
					title: "New York TEST",
					location_type: "City",
					woeid: 2459115,
					latt_long: "40.71455,-74.007118"
				}
			];

			const expectedActions = [
				{ type: actionTypes.FETCH_LOCATIONS, searchTerm: "new york" },
				{ type: actionTypes.RECEIVE_LOCATIONS, locations: mockData }
			];

			const store = mockStore({});

			store
				.dispatch(actions.fetchLoctions("new york"))
				.then(thenFn)
				.catch(catchFn);
			//expect calling correct api
			expect(mockAxios.get).toHaveBeenCalledWith(
				"/api/location/search/?query=new york"
			);
			mockAxios.mockResponse({ data: mockData });
			//expect all other action are triggered with mock data
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
	//** SELECT_LOCATION and RECEIVE_WEATHER actions **
	describe("Weather actions", () => {
		it("SELECT_LOCATION, FETCH_LOCATIONS and RECEIVE_WEATHER", () => {
			let catchFn = jest.fn(),
				thenFn = jest.fn();

			const mockData = {
				consolidated_weather: [
					{
						applicable_date: "2018-08-07",
						max_temp: 27.122499999999999,
						min_temp: 21.635000000000002,
						weather_state_abbr: "lr",
						weather_state_name: "Light Rain"
					},
					{
						applicable_date: "2018-08-08",
						max_temp: 27.122499999999999,
						min_temp: 21.635000000000002,
						weather_state_abbr: "lr",
						weather_state_name: "Light Rain"
					},
					{
						applicable_date: "2018-08-09",
						max_temp: 27.122499999999999,
						min_temp: 21.635000000000002,
						weather_state_abbr: "lr",
						weather_state_name: "Light Rain"
					},
					{
						applicable_date: "2018-08-10",
						max_temp: 27.122499999999999,
						min_temp: 21.635000000000002,
						weather_state_abbr: "lr",
						weather_state_name: "Light Rain"
					},
					{
						applicable_date: "2018-08-11",
						max_temp: 27.122499999999999,
						min_temp: 21.635000000000002,
						weather_state_abbr: "lr",
						weather_state_name: "Light Rain"
					},
					{
						applicable_date: "2018-08-12",
						max_temp: 27.122499999999999,
						min_temp: 21.635000000000002,
						weather_state_abbr: "lr",
						weather_state_name: "Light Rain"
					}
				],
				location_type: "City",
				parent: {
					title: "New York",
					woeid: 2347591
				},
				title: "New York",
				woeid: 2459115
			};

			const expectedActions = [
				{ type: actionTypes.SELECT_LOCATION, woeid: 2459115 },
				{ type: actionTypes.FETCH_LOCATIONS, searchTerm: "New York" },
				{ type: actionTypes.RECEIVE_LOCATIONS, locations: [] },
				{ type: actionTypes.RECEIVE_WEATHER, location: mockData }
			];
			const store = mockStore({});
			store
				.dispatch(actions.selectLocation(2459115, "New York"))
				.then(thenFn)
				.catch(catchFn);
			//expect calling correct api
			expect(mockAxios.get).toHaveBeenCalledWith(
				"/api/location/2459115/"
			);
			mockAxios.mockResponse({ data: mockData });
			//expect all other action are triggered with mock data
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
	//** selectTheme actions **
	describe("Theme actions", () => {
		it("SELECT_THEME action", () => {
			const expectedAction = {
				type: actionTypes.SELECT_THEME,
				theme: "selectedTheme"
			};
			const store = mockStore({});
			store.dispatch(actions.selectTheme("selectedTheme"));
			expect(store.getActions()).toEqual([expectedAction]);
		});
	});

});
