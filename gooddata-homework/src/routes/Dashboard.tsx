import React, {useState} from "react";

import {defaultDateFilterOptions} from "../constants";

import Page from "../components/Page";
import styles from "./Dashboard.module.scss";

import FilterBar from "../components/controls/FilterBar";
import DateFilter from "../components/controls/DateFilter";
import {DateFilterOption} from "@gooddata/sdk-ui-filters/esm/DateFilter/interfaces";

const PREFIX = "My Dashboard";
const NOT_SELECTED = "All time";

const Dashboard: React.FC = () => {
	const [state, setState] = useState({
		selectedFilterOption: defaultDateFilterOptions.allTime as DateFilterOption,
		excludeCurrentPeriod: false,
		dashboardName: NOT_SELECTED
	});

	const onApply = (selectedFilterOption: DateFilterOption, excludeCurrentPeriod: boolean) => {
		setState({
			selectedFilterOption,
			excludeCurrentPeriod,
			dashboardName: getDashboardName(selectedFilterOption)
		});
	};

	return (
		<Page>
			<div className={styles.Lead}>
				<h1>{`${PREFIX} "${state.dashboardName}`}"</h1>
			</div>
			<FilterBar>
				<DateFilter
					excludeCurrentPeriod={state.excludeCurrentPeriod}
					selectedFilterOption={state.selectedFilterOption}
					onApply={onApply}
				/>
			</FilterBar>
		</Page>
	);
};

function getDashboardName(selectedFilterOption: any): string {

	if (selectedFilterOption.name) {
		return selectedFilterOption.name;
	}

	const ranges = [];
	if (selectedFilterOption.from) {
		ranges.push(selectedFilterOption.from);
	}
	if (selectedFilterOption.to) {
		ranges.push(selectedFilterOption.to);
	}
	if (ranges.length > 0) {
		return ranges.join(" - ");
	}

	return NOT_SELECTED;
}

export default Dashboard;
