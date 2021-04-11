import React, {useState} from "react";
import {DateFilterOption} from "@gooddata/sdk-ui-filters/esm/DateFilter/interfaces";

import styles from "./CalculationView.module.scss";
import {CalculationResults, SelectableCalculations} from "./CalculationResults";
import {DateFilterHelpers} from "@gooddata/sdk-ui-filters";
import {DateDatasets} from "../../ldm/full";
import {t, LocalesContext} from "../../contexts/Locales";

const CalculationView: React.FC<{ selectedFilterOption: DateFilterOption, excludeCurrentPeriod: boolean }> = (props) => {
	const [state, setState] = useState({
		selected: SelectableCalculations[0].id
	});
	const current = SelectableCalculations.filter((item) => state.selected === item.id)[0];

	const dateFilter = DateFilterHelpers.mapOptionToAfm(
		props.selectedFilterOption,
		DateDatasets.Date.ref,
		props.excludeCurrentPeriod,
	);

	return (
		<div className={styles.Grid}>
			<div className={styles.Total}>
				<CalculationResults
					selected={current}
					filters={dateFilter ? [dateFilter] : []}
				/>
			</div>
			<div className={styles.Select}>
				<LocalesContext.Consumer>
					{(locales) => (
						<>
							<h5>{t(locales, "Select calculation")}</h5>
							<div className={styles.CalculationSelects}>
								<select onChange={(e) => setState({ selected: e.target.value })} defaultValue={current.id}>
									{SelectableCalculations.map((calc, i) => (
										<option key={i} value={calc.id}>{calc.name}</option>
									))}
								</select>
							</div>
						</>
					)}
				</LocalesContext.Consumer>
			</div>
		</div>
	);
};

export default CalculationView;
