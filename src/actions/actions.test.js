import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as menuActions from "./menuActions";
import * as otherActions from "./other";
import * as actionTypes from "../constants/ActionTypes";
// import fetch from "jest-fetch-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

	describe("Seach Location actions", () => {
		//afterEach(() => {});
		it("creates RECEIVE_LOCATIONS when FETCH_LOCATIONS has been done", () => {
			// fetch.mockResponse(
			// 	JSON.stringify(
			// 		("data": [
			// 			{
			// 				title: "New York",
			// 				location_type: "City",
			// 				woeid: 2459115,
			// 				latt_long: "40.71455,-74.007118"
			// 			}
			// 		])
			// 	)
			// );
			const expectedActions = [
				{ type: actionTypes.FETCH_LOCATIONS, searchTerm: "new york" },
				{
					type: actionTypes.RECEIVE_LOCATIONS,
					locations: [
						{
							title: "New York",
							location_type: "City",
							woeid: 2459115,
							latt_long: "40.71455,-74.007118"
						}
					]
				}
			];
			const store = mockStore({});
			return store
				.dispatch(otherActions.fetchLoctions("new york"))
				.then(() => {
					// return of async actions
					expect(store.getActions()).toEqual(expectedActions);
				});
		});
	});

	//2347591, New York

// describe("select location actions", () => {
// 	//afterEach(() => {});
// 	it("creates action when SELECT_LOCATION has been done", () => {
// 		fetch.mockResponse(JSON.stringify({"data": "locationResponse"}));
// 		const expectedActions = [
// 			{ type: types.SELECT_LOCATION, woeid: 2459115 },
// 			{ type: types.FETCH_LOCATIONS, searchTerm: "New York" },
// 			{ type: types.RECEIVE_LOCATIONS,locations: []},
// 			{ type: types.RECEIVE_WEATHER,location:"locationResponse"}
// 		];
// 		const store = mockStore({});
// 		return store.dispatch(actions.selectLocation(2459115,"New York")).then(() => {
// 			// return of async actions
// 			expect(store.getActions()).toEqual(expectedActions);
// 		});
// 	});
// });
});
