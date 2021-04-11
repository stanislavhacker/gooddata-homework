import React from "react";

import { useDataView, useExecution, ErrorComponent, LoadingComponent } from "@gooddata/sdk-ui";
import {IUseExecutionConfig} from "@gooddata/sdk-ui/esm/execution/useExecution";
import {DataViewFacade} from "@gooddata/sdk-ui/esm/base";
import {newMeasureSort, INullableFilter} from "@gooddata/sdk-model";

import {Revenue, Product, TotalRevenue} from "../../ldm/full";
import {LocalesContext, t} from "../../contexts/Locales";

export type CalculationDescription = {
	name: string;
	id: string;
	data: (results: DataViewFacade | undefined) => React.ReactNode;
}

export const BiggestRevenueInCategory: IUseExecutionConfig & CalculationDescription = {
	name: "Biggest revenue in category",
	id: Math.random().toString(36),
	seriesBy: [Revenue],
	slicesBy: [Product.Default],
	sortBy: [newMeasureSort(Revenue, "desc")],
	data: (results: DataViewFacade | undefined): React.ReactNode => {
		if (results) {
			const label = results.data().slices().toArray()[0].sliceTitles()[0];
			const first = results.data().series().firstForMeasure(Revenue).dataPoints()[0];

			return <OK label={label} value={first.formattedValue()} />
		}
		return <NA/>;
	}
}
export const SumOfAllRevenue: IUseExecutionConfig & CalculationDescription = {
	name: "Total revenue",
	id: Math.random().toString(36),
	seriesBy: [TotalRevenue],
	slicesBy: [],
	data: (results: DataViewFacade | undefined): React.ReactNode => {
		if (results) {
			const label = results.data().series().fromMeasures[0].measureHeaderItem.name;
			const first = results.data().series().firstForMeasure(TotalRevenue).dataPoints()[0];

			return <OK label={label} value={first.formattedValue()} />
		}
		return <NA/>;
	}
}

export const SelectableCalculations = [
	SumOfAllRevenue,
	BiggestRevenueInCategory
];

export const CalculationResults: React.FC<{ selected: IUseExecutionConfig & CalculationDescription, filters: INullableFilter[] }> = (props) => {
	const execution = useExecution({ ...props.selected, filters: props.filters });
	const { result, status } = useDataView({ execution }, [execution?.fingerprint()]);


	return (
		<LocalesContext.Consumer>
			{(locales) => (
				<div>
					{status === "error" && (
						<ErrorComponent message={t(locales, "There was an error getting your execution")}/>
					)}
					{status === "loading" && (
						<LoadingComponent />
					)}
					{status === "success" && props.selected.data(result)}
				</div>
			)}
		</LocalesContext.Consumer>
	);
};

const NA: React.FC = () => {
	return (
		<LocalesContext.Consumer>
			{(locales) => (
				<ErrorComponent message={t(locales, "Data are not available.")} />
			)}
		</LocalesContext.Consumer>
	);
};

const OK: React.FC<{ label: string, value: string | null }> = (props) => {
	if (props.value === null) {
		return <NA />
	}
	return (
		<div>
			<h5>{props.label}</h5>
			<h1>{props.value}</h1>
		</div>
	);
};