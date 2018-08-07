import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Search from "./Search";

Enzyme.configure({ adapter: new Adapter() });

// afterEach(() => {
//   enzymeWrapper.unmount();
// });

function searchSetup() {
  const props = {
    fetchLoctions: jest.fn(),
    selectLocation: jest.fn(),
    searchTerm: "test search",
    searchResult: [
      {
        title: "New York",
        location_type: "City",
        woeid: 2459115,
        latt_long: "40.71455,-74.007118"
      },
      {
        title: "New Delhi",
        location_type: "City",
        woeid: 28743736,
        latt_long: "28.643999,77.091003"
      },
      {
        title: "Newcastle",
        location_type: "City",
        woeid: 30079,
        latt_long: "54.977940,-1.611620"
      }
    ]
  };
  const enzymeWrapper = mount(<Search {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe("Test components", () => {
  describe("Search", () => {
    it("should render self and subcomponents", () => {
      const { enzymeWrapper } = searchSetup();
      expect(enzymeWrapper.find(".search").exists()).toBe(true);
      // expect(enzymeWrapper.find('li').length).toEqual(3);
      expect(enzymeWrapper.find("li")).toHaveLength(3);
      expect(enzymeWrapper.find("#searchInput").exists()).toBe(true);
    });

    it("should call fetchLoctions searchInput OnChange", () => {
      const { enzymeWrapper, props } = searchSetup();
      const input = enzymeWrapper.find("#searchInput");
      const event1 = { target: { name: "", value: "new" } };
      input.props().onChange(event1);
      expect(props.fetchLoctions.mock.calls).toHaveLength(1);
      const event2 = { target: { name: "", value: "new" } };
      input.props().onChange(event2);
      expect(props.fetchLoctions.mock.calls).toHaveLength(2);
    });
  });
});
