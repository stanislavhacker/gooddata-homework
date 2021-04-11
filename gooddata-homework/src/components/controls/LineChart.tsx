import React from "react";
import {LineChart as LineChartInternal} from "@gooddata/sdk-ui-charts";
import {DateFilterHelpers} from "@gooddata/sdk-ui-filters";
import {DateFilterOption} from "@gooddata/sdk-ui-filters/esm/DateFilter/interfaces";

import {Revenue, Product, DateDatasets} from "../../ldm/full";

const measures = [
	Revenue
];

export const LineChart: React.FC<{ selectedFilterOption: DateFilterOption, excludeCurrentPeriod: boolean }> = (props) => {

	const dateFilter = DateFilterHelpers.mapOptionToAfm(
		props.selectedFilterOption,
		DateDatasets.Date.ref,
		props.excludeCurrentPeriod,
	);

	return (
		<div>
			<LineChartInternal measures={measures} segmentBy={Product.Default} trendBy={DateDatasets.Date.Month.Short}
							   filters={dateFilter ? [dateFilter] : []} />
		</div>
	);
};