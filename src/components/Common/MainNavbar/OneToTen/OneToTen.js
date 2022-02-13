//rafce
import React from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";
import One from "./One/One";
import Two from "./Two/Two";
// import styles from "./OneToTen.module.css";
import Three from "./Three/Three";
import Four from "./Four/Four";
import Five from "./Five/Five";
import Six from "./Six/Six";
import Seven from "./Seven/Seven";
import Eight from "./Eight/Eight";
import Nine from "./Nine/Nine";
import Ten from "./Ten/Ten";
const OneToTen = ({ styles }) => {
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
                    {/* প্রথম থেকে দশম */}
                    স্কুল
                </Dropdown.Toggle>

                <div className={styles.customDropDownItems}>
                    <Dropdown.Menu>
                        <One styles={styles} />
                        <Two styles={styles} />
                        <Three styles={styles} />
                        <Four styles={styles} />
                        <Five styles={styles} />
                        <Six styles={styles} />
                        <Seven styles={styles} />
                        <Eight styles={styles} />
                        <Nine styles={styles} />
                        <Ten styles={styles} />
                        {/* <Dropdown.Item to="#/action-1">সাধারন</Dropdown.Item>
                        <Dropdown.Item to="#/action-2">মধ্যম</Dropdown.Item> */}

                        {/* ----------------------- বিষয়ভিত্তিক > সমাধান > সিরিয়াস Dropdown----------------------------------- */}
                        {/* <Dropdown>
                            <Dropdown.Toggle
                                variant="none shadow-none w-100 rounded-0 text-start"
                                id="dropdown-basic"
                                border="none"
                                className={styles.customDropDown}
                            >
                                সিরিয়াস
                            </Dropdown.Toggle>

                            <div className={styles.customDropDownItems}>
                                <Dropdown.Menu>
                                    <Dropdown.Item to="#/action-1">
                                        জাতীয়
                                    </Dropdown.Item>
                                    <Dropdown.Item to="#/action-2">
                                        আন্তর্জাতিক
                                    </Dropdown.Item>
                                    <Dropdown.Item to="#/action-3">
                                        সামাজিক
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </div>
                        </Dropdown> */}
                    </Dropdown.Menu>
                </div>
            </Dropdown>
        </>
    );
};

export default OneToTen;
