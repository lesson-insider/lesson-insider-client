//rafce
import React from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";
import Eleven from "./Eleven/Eleven";
import Twelve from "./Twelve/Twelve";
// import styles from "./OneToTen.module.css";

const College = ({ styles }) => {
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
                    কলেজ
                </Dropdown.Toggle>

                <div className={styles.customDropDownItems}>
                    <Dropdown.Menu>
                        <Eleven styles={styles} />
                        <Twelve styles={styles} />
                    </Dropdown.Menu>
                </div>
            </Dropdown>
        </>
    );
};

export default College;
