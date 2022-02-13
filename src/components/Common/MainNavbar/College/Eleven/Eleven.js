//rafce
import React from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";

// import styles from "./Eleven.module.css";

const Eleven = ({ styles }) => {
    return (
        <>
            {/* ----------------------- বিষয়ভিত্তিক > সমাধান Dropdown----------------------------------- */}
            <Dropdown>
                <Dropdown.Toggle
                    variant="none shadow-none w-100 rounded-1 text-start"
                    id="dropdown-basic"
                    border="none"
                    className={styles.customDropDown}
                >
                    একাদশ
                </Dropdown.Toggle>

                <div className={styles.customDropDownItems}>
                    <Dropdown.Menu></Dropdown.Menu>
                </div>
            </Dropdown>
        </>
    );
};

export default Eleven;
