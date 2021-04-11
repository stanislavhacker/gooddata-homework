import React from "react";
import cx from "classnames";

import styles from "./FilterBar.module.scss";

export interface IFilterBarProps extends React.HTMLProps<HTMLDivElement> {}

const FilterBar: React.FC<IFilterBarProps> = ({
										  className = null,
										  children,
										  ...restProps
									  }) => {
	return (
		<div className={cx(styles.Label, className)} {...restProps}>
			{children}
		</div>
	);
};

export default FilterBar;
