import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../../actions/other";
import * as types from "../../constants/ActionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("seach location actions", () => {
	afterEach(() => {});

	it("creates RECEIVE_LOCATIONS when FETCH_LOCATIONS has been done", () => {
		fetch.mockResponse(
			JSON.stringify(
				("data": [
					{
						title: "New York",
						location_type: "City",
						woeid: 2459115,
						latt_long: "40.71455,-74.007118"
					}
				])
			)
		);
		const expectedActions = [
			{ type: types.FETCH_LOCATIONS, searchTerm: "new york" },
			{
				type: types.RECEIVE_LOCATIONS,
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
		return store.dispatch(actions.fetchLoctions("new york")).then(() => {
			// return of async actions
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});
