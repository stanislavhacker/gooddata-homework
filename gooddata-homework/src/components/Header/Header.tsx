import React, { useState, useEffect, useCallback } from "react";
import throttle from "lodash/throttle";

import Logo from "./Logo";
import Links from "./Links";
import Aside from "./Aside";

import styles from "./Header.module.scss";

const VerticalDelimiter: React.FC = ({ ...restProps }) => (
    <div className={styles.VerticalDelimiter} {...restProps} />
);

const BurgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.BurgerMenu}>
            <button
                className={styles.BurgerToggle}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                ☰
            </button>
            {isOpen && (
                <div className={styles.BurgerContent}>
                    <Links />
                </div>
            )}
        </div>
    );
};

const Header: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(window ? window.innerWidth : null);

    const handleResize = useCallback(
        throttle(() => {
            if (window) {
                setWindowWidth(window.innerWidth);
            }
        }, 200),
        [],
    );

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    // You need to set this manually to the smallest window width that can still fit all menu items
    const isTooSmall = windowWidth && windowWidth < 666;
    return (
        <nav className={styles.Header}>
            {isTooSmall ? (
                <>
                    <BurgerMenu />
                    <Logo />
                </>
            ) : (
                <>
                    <Logo />
                    <VerticalDelimiter />
                    <Links />
                </>
            )}
            <Aside />
        </nav>
    );
};

export default Header;
