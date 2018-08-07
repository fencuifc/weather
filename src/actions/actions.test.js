import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as menuActions from "./menuActions";
import * as otherActions from "./other";
import * as actionTypes from "../constants/ActionTypes";
// import fetch from "jest-fetch-mock";
import mockAxios from "jest-mock-axios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
afterEach(() => {
	// cleaning up the mess left behind the previous test
	mockAxios.reset();
});

describe("Test actions", () => {
	describe("Menu actions", () => {
		it("ToggleMenu action", () => {
			const expectedAction = {
				type: actionTypes.TOGGLE_MENU
			};
			const store = mockStore({});
			store.dispatch(menuActions.toggleMenu());
			console.log(store.getActions());
			expect(store.getActions()).toEqual([expectedAction]);
		});
	});

	describe("Seach Location action", () => {
		it("creates RECEIVE_LOCATIONS when FETCH_LOCATIONS has been done", () => {
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
				.dispatch(otherActions.fetchLoctions("new york"))
				.then(thenFn)
				.catch(catchFn);

			expect(mockAxios.get).toHaveBeenCalledWith(
				"/api/location/search/?query=new york"
			);

			mockAxios.mockResponse({ data: mockData });
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	//2347591, New York

	describe("Select location action", () => {
		it("creates action when SELECT_LOCATION has been done", () => {
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
				{ type: actionTypes.SELECT_LOCATION, woeid: 2459115 },
				{ type: actionTypes.FETCH_LOCATIONS, searchTerm: "New York" },
				{ type: actionTypes.RECEIVE_LOCATIONS, locations: [] },
				{ type: actionTypes.RECEIVE_WEATHER, location: mockData }
			];
			const store = mockStore({});
			store
				.dispatch(otherActions.selectLocation(2459115, "New York"))
				.then(thenFn)
				.catch(catchFn);

			expect(mockAxios.get).toHaveBeenCalledWith(
				"/api/location/2459115/"
			);
			mockAxios.mockResponse({ data: mockData });
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});
