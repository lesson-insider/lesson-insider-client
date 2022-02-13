//rafce
import React from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";

const Twelve = ({ styles }) => {
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
                    দ্বাদশ
                </Dropdown.Toggle>

                <div className={styles.customDropDownItems}>
                    <Dropdown.Menu></Dropdown.Menu>
                </div>
            </Dropdown>
        </>
    );
};

export default Twelve;
