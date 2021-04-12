import React, {useState} from "react";
import {DateFilterOption} from "@gooddata/sdk-ui-filters/esm/DateFilter/interfaces";

import {defaultDateFilterOptions} from "../constants";
import {LocalesContext, LocalesState, t} from "../contexts/Locales";

import Page from "../components/Page";
import styles from "./Dashboard.module.scss";

import FilterBar from "../components/controls/FilterBar";
import DateFilter from "../components/controls/DateFilter";
import CalculationView from "../components/controls/CalculationView";
import {LineChart} from "../components/controls/LineChart";

const NOT_SELECTED = "ALL_TIME";

const Dashboard: React.FC = () => {
	const [state, setState] = useState({
		selectedFilterOption: defaultDateFilterOptions.allTime as DateFilterOption,
		excludeCurrentPeriod: false
	});

	const onApply = (selectedFilterOption: DateFilterOption, excludeCurrentPeriod: boolean) => {
		setState({
			selectedFilterOption,
			excludeCurrentPeriod
		});
	};

	return (
		<Page>
			<LocalesContext.Consumer>
				{(locales) => (
					<>
						<div className={styles.Lead}>
							<h1>{t(locales, "My Dashboard")} "<DashboardName selectedFilterOption={state.selectedFilterOption} />"</h1>
						</div>
						<FilterBar>
							<DateFilter
								excludeCurrentPeriod={state.excludeCurrentPeriod}
								selectedFilterOption={state.selectedFilterOption}
								onApply={onApply}
							/>
						</FilterBar>
						<div className={styles.Grid}>
							<div className={styles.GridItem}>
								<LineChart
									excludeCurrentPeriod={state.excludeCurrentPeriod}
									selectedFilterOption={state.selectedFilterOption}
								/>
							</div>
							<div className={styles.GridItem}>
								<CalculationView
									excludeCurrentPeriod={state.excludeCurrentPeriod}
									selectedFilterOption={state.selectedFilterOption}
								/>
							</div>
						</div>
					</>
				)}
			</LocalesContext.Consumer>
		</Page>
	);
};

const DashboardName: React.FC<{ selectedFilterOption: any }> = (props) => {
	return (
		<LocalesContext.Consumer>
			{(locales) => (
				<span>{getDashboardName(props.selectedFilterOption, locales)}</span>
			)}
		</LocalesContext.Consumer>
	);
};

function getDashboardName(selectedFilterOption: any, locales: LocalesState): string {

	if (selectedFilterOption.name) {
		return selectedFilterOption.name;
	}
	if (selectedFilterOption.localIdentifier && locales.locales[selectedFilterOption.localIdentifier]) {
		return t(locales, selectedFilterOption.localIdentifier);
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

	return t(locales, NOT_SELECTED);
}

export default Dashboard;
