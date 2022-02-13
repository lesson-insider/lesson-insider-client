//rafce
import React from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";
// import styles from "./OneToTen.module.css";
const Ten = ({ styles }) => {
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
                    দশম
                </Dropdown.Toggle>

                <div className={styles.customDropDownItems}>
                    <Dropdown.Menu>
                        {/* ----------------------- বিষয়ভিত্তিক > সমাধান > সিরিয়াস Dropdown----------------------------------- */}
                        <Dropdown>
                            <Dropdown.Item to="#/action-1">
                                আমার বাংলা বই
                            </Dropdown.Item>
                            <Dropdown.Item to="#/action-2">
                                প্রাথমিক গণিত
                            </Dropdown.Item>
                            <Dropdown.Item to="#/action-2">
                                English for Today
                            </Dropdown.Item>
                            {/* <Dropdown.Toggle
                                variant="none shadow-none w-100 rounded-0 text-start"
                                id="dropdown-basic"
                                border="none"
                                className={styles.customDropDown}
                            >
                                বাংলা
                            </Dropdown.Toggle>

                            <div className={styles.customDropDownItems}>
                                <Dropdown.Menu>
                                    <Dropdown.Item to="#/action-1">
                                        আমার বাংলা বই
                                    </Dropdown.Item>
                                    <Dropdown.Item to="#/action-2">
                                        English for Today
                                    </Dropdown.Item>
                                    <Dropdown.Item to="#/action-3">
                                        প্রাথমিক গণিত
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </div> */}
                        </Dropdown>
                    </Dropdown.Menu>
                </div>
            </Dropdown>
        </>
    );
};
export default Ten;
