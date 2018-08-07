import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Search from "./Search";
import ThemeSelector from "./ThemeSelector";
import DayWeather from "./DayWeather";
import LocationInfo from "./LocationInfo";
import Menu from "./Menu";


Enzyme.configure({ adapter: new Adapter() });

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

function themeSelectorSetup() {
  const props = {
    selectedTheme: "theme7",
    selectTheme: jest.fn(),
    themes: [
      ["theme0", "theme1", "theme2"],
      ["theme3", "theme4", "theme5"],
      ["theme6", "theme7", "theme8"]
    ]
  };
  const enzymeWrapper = mount(<ThemeSelector {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

// function menuSetup() {
//   const props = {
//     toggleMenu: jest.fn(),
//     isMenuOpen: false
//   };
//   const enzymeWrapper = mount(<Menu {...props} />);
//   return {
//     props,
//     enzymeWrapper
//   };
// }

function locationInfoSetup(props) {
  const enzymeWrapper = mount(<LocationInfo {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

function dayWeatherSetup() {
  const props = {
    currentLocation: {
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
      ]
    }
  };
  const enzymeWrapper = mount(<DayWeather {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe("Test components", () => {
  // ** Search component **
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
  // ** ThemeSelector component **
  describe("ThemeSelector", () => {
    it("should render self and subcomponents", () => {
      const { enzymeWrapper } = themeSelectorSetup();
      // expect(enzymeWrapper.html()).toEqual("ssss");
      expect(enzymeWrapper.find(".theme").exists()).toBe(true);
      expect(enzymeWrapper.find("tr")).toHaveLength(3);
      expect(enzymeWrapper.find("td")).toHaveLength(9);
      expect(enzymeWrapper.find("[data-selecedtheme='theme7']").exists()).toBe(
        true
      );
    });

    it("should call selectTheme during td onClick", () => {
      const { enzymeWrapper, props } = themeSelectorSetup();
      const input = enzymeWrapper.find(".theme4");
      input.props().onClick();
      expect(props.selectTheme).toHaveBeenCalledTimes(1);
      expect(props.selectTheme).toHaveBeenLastCalledWith("theme4");
      const input2 = enzymeWrapper.find(".theme6");
      input2.props().onClick();
      expect(props.selectTheme).toHaveBeenCalledTimes(2);
      expect(props.selectTheme).toHaveBeenLastCalledWith("theme6");
    });
  });
  // ** DayWeather component **
  describe("DayWeather", () => {
    it("should render self and subcomponents", () => {
      const { enzymeWrapper } = dayWeatherSetup();
      expect(enzymeWrapper.find(".weather").exists()).toBe(true);
      expect(enzymeWrapper.find(".weatherItem")).toHaveLength(5);
      expect(enzymeWrapper.find(".temp")).toHaveLength(5);
      expect(enzymeWrapper.find(".state")).toHaveLength(5);
      expect(
        enzymeWrapper
          .find(".state")
          .at(2)
          .text()
      ).toEqual("Light Rain");
    });
  });
  // ** LocationInfo component **
  describe("LocationInfo", () => {
    it("should render self and subcomponents", () => {
      const { enzymeWrapper } = locationInfoSetup({
        city: "Houston",
        state: "TX"
      });
      expect(enzymeWrapper.find(".cityInfo").exists()).toBe(true);
    });
    it("no reneder for no prop", () => {
      const { enzymeWrapper } = locationInfoSetup({});
      expect(enzymeWrapper.find(".cityInfo").exists()).toBe(false);
    });
  });
  // ** menu component **
  // describe("Menu", () => {
  //   it("should render self and subcomponents", () => {
  //     const { enzymeWrapper } = menuSetup();
  //     expect(enzymeWrapper.find(".menu").exists()).toBe(true);
  //   });
  // });
});
