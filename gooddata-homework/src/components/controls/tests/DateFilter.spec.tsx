import React from "react";
import { shallow } from "enzyme";

import DateFilter from "../DateFilter";
import {defaultDateFilterOptions} from "../../../constants";

describe("DateFilter component", () => {
	it("should render correctly", () => {
		const onApply = jest.fn();
		const wrapper = shallow(<DateFilter excludeCurrentPeriod={false} selectedFilterOption={defaultDateFilterOptions.allTime} onApply={onApply} />);
		expect(wrapper.children().length).toBe(1);
		expect(wrapper.children().text()).toBe("<DateFilter />");
	});
});
