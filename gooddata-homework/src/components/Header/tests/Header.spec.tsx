import React from "react";
import { shallow } from "enzyme";

import Header from "../Header";

describe("Header component", () => {
	it("should render menu structure in right order", () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.children().length).toEqual(4);
		expect(wrapper.children().at(0).text()).toEqual("<Logo />");
		expect(wrapper.children().at(1).text()).toEqual("<VerticalDelimiter />");
		expect(wrapper.children().at(2).text()).toEqual("<Links />");
		expect(wrapper.children().at(3).text()).toEqual("<Aside />");
	});
});
