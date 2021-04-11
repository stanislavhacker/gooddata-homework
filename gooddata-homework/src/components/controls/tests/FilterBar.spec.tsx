import React from "react";
import { shallow } from "enzyme";

import FilterBar from "../FilterBar";

describe("FilterBar component", () => {
	it("should render correctly", () => {
		const wrapper = shallow(<FilterBar />);
		expect(wrapper.children().length).toBe(0);
	});

	it("should render correctly with children", () => {
		const wrapper = shallow(<FilterBar>Inside</FilterBar>);
		expect(wrapper.children().length).toBe(1);
		expect(wrapper.children().text()).toBe("Inside");
	});
});