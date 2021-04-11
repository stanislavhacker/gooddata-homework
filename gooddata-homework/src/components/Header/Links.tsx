import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

const Links: React.FC = () => {
    return (
        <>
            <NavLink to={"/"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Home
            </NavLink>
        </>
    );
};

export default Links;
