import React from "react";
import { shallow } from "enzyme";

import {LineChart} from "../LineChart";
import {defaultDateFilterOptions} from "../../../constants";

describe("LineChart component", () => {
	it("should render correctly", () => {
		const wrapper = shallow(<LineChart excludeCurrentPeriod={false} selectedFilterOption={defaultDateFilterOptions.allTime!}/>);
		expect(wrapper.children().length).toBe(1);
		expect(wrapper.children().text()).toBe("<withChart(withContexts(withBackend(withWorkspace(withChartDefinition(CoreLineChart))))) />");
	});
});
