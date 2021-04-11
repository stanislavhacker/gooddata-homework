import React from "react";
import { shallow } from "enzyme";

import Links from "../Links";

describe("Links component", () => {
	it("should render all links", () => {
		const wrapper = shallow(<Links />);
		expect(wrapper.children().length).toEqual(2);
		expect(wrapper.children().at(0).text()).toEqual("Home");
		expect(wrapper.children().at(1).text()).toEqual("Dashboard");
	});
});
