import React from "react";

import {DateFilter as DateFilterInternal, IDateFilterCallbackProps} from "@gooddata/sdk-ui-filters";
import {DateFilterOption, IDateFilterOptionsByType, IUiAbsoluteDateFilterForm} from "@gooddata/sdk-ui-filters/esm/DateFilter/interfaces";

import {availableGranularities, defaultDateFilterOptions} from "../../constants";

const dateFrom = new Date();
dateFrom.setMonth(dateFrom.getMonth() - 1);

const DateFilter: React.FC<IDateFilterCallbackProps & { excludeCurrentPeriod?: boolean, selectedFilterOption?: DateFilterOption }> = (props) => {
	const preset: IDateFilterOptionsByType = {
		...defaultDateFilterOptions,
		absoluteForm: {
			...defaultDateFilterOptions.absoluteForm,
			from: dateFrom.toISOString().substr(0, 10), // 'YYYY-MM-DD'
			to: new Date().toISOString().substr(0, 10), // 'YYYY-MM-DD'
		} as IUiAbsoluteDateFilterForm
	}

	return (
		<>
			<DateFilterInternal
				filterOptions={preset}
				availableGranularities={availableGranularities}
				customFilterName="Selected date"
				dateFilterMode="active"
				dateFormat="MM/dd/yyyy"
				{...props}
			/>
		</>
	);
};

export default DateFilter;
