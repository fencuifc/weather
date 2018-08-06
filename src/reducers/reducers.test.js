import * as actionTypes from "../constants/ActionTypes";
import reducer from "../reducers";

describe("Test reducers", () => {
	describe("menu reducers", () => {
		describe("menu close", () => {
			it("should return close menu", () => {
				expect(
					reducer(
						{ isMenuOpen: true },
						{ type: actionTypes.TOGGLE_MENU }
					)
				).toMatchObject({ isMenuOpen: false });
			});
		});

		describe("menu open", () => {
			it("should return open menu", () => {
				expect(
					reducer(
						{ isMenuOpen: false },
						{ type: actionTypes.TOGGLE_MENU }
					)
				).toMatchObject({ isMenuOpen: true });
			});
		});
	});
	describe("search result reducer", () => {
		describe("receive result locations", () => {
			it("should return updated result locations", () => {
				expect(
					reducer(
						{},
						{
							locations: [{ a: "a" }],
							type: actionTypes.RECEIVE_LOCATIONS
						}
					)
				).toMatchObject({
					searchResult: [{ a: "a" }]
				});
			});
		});
	});
});
