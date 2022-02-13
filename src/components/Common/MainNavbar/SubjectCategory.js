//rafce
import React from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";
import OneToTen from "./OneToTen/OneToTen";
import styles from "./MainNavbar.module.css";
import College from "./College/College";
import University from "./University/University";
const SubjectCategory = () => {
    return (
        <div>
            <NavDropdown title="বিষয়ভিত্তিক" id="collasible-nav-dropdown">
                {/* <NavDropdown.Item to="#action/3.1">
                    প্রথম থেকে দশম
                </NavDropdown.Item> */}
                <OneToTen styles={styles} />
                <College styles={styles} />
                <University styles={styles} />

                <NavDropdown.Item to="#action/3.2">মাদ্রাসা</NavDropdown.Item>
                <NavDropdown.Item to="#action/3.3">বিসিএস</NavDropdown.Item>
                <NavDropdown.Item to="#action/3.3">
                    জব প্রিপারেশন
                </NavDropdown.Item>
                <NavDropdown.Item to="#action/3.4">
                    সরকারি স্কুল ভর্তি{" "}
                </NavDropdown.Item>

                <NavDropdown.Item to="#action/3.4">
                    বিশ্ববিদ্যালয় ভর্তি
                </NavDropdown.Item>
                {/* ----------------------- বিষয়ভিত্তিক > সমস্যা Dropdown----------------------------------- */}
                <Dropdown>
                    <Dropdown.Toggle
                        variant="none shadow-none w-100 rounded-0 text-start"
                        id="dropdown-basic"
                        border="none"
                        className={styles.customDropDown}
                    >
                        বিদেশে উচ্চশিক্ষা
                    </Dropdown.Toggle>

                    <div className={styles.customDropDownItems}>
                        <Dropdown.Menu>
                            <Dropdown.Item to="#/action-1">
                                ব্যাক্তিগত সমস্যা
                            </Dropdown.Item>
                            <Dropdown.Item to="#/action-2">
                                সামাজিক সমস্যা
                            </Dropdown.Item>
                            <Dropdown.Item to="#/action-3">
                                এলাকাভিত্তিক সমস্যা
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </div>
                </Dropdown>
                <NavDropdown.Item to="#action/3.3">ব্যাবসা</NavDropdown.Item>
                {/* ----------------------- বিষয়ভিত্তিক > সমাধান Dropdown----------------------------------- */}
                <Dropdown>
                    <Dropdown.Toggle
                        variant="none shadow-none w-100 rounded-1 text-start"
                        id="dropdown-basic"
                        border="none"
                        className={styles.customDropDown}
                    >
                        স্কিল ডেভেলপমেন্ট
                    </Dropdown.Toggle>

                    <div className={styles.customDropDownItems}>
                        <Dropdown.Menu>
                            <Dropdown.Item to="#/action-1">
                                সাধারন
                            </Dropdown.Item>
                            <Dropdown.Item to="#/action-2">মধ্যম</Dropdown.Item>
                            {/* <Dropdown.Item href="#/action-3">
                                                সিরিয়াস
                                            </Dropdown.Item> */}
                            {/* ----------------------- বিষয়ভিত্তিক > সমাধান > সিরিয়াস Dropdown----------------------------------- */}
                            <Dropdown>
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
                            </Dropdown>
                        </Dropdown.Menu>
                    </div>
                </Dropdown>

                <NavDropdown.Item to="#action/3.4">
                    ভাষা শিক্ষা
                </NavDropdown.Item>
                <NavDropdown.Item to="#action/3.4">
                    ফ্রিলান্সিং
                </NavDropdown.Item>
                <NavDropdown.Item to="#action/3.4">
                    ভোকেশনাল স্টাডি
                </NavDropdown.Item>
                <NavDropdown.Item to="#action/3.4">
                    Sell Your Idea 💡
                </NavDropdown.Item>
                <NavDropdown.Item to="#action/3.4">
                    সফলতার গল্প
                </NavDropdown.Item>
            </NavDropdown>
        </div>
    );
};

export default SubjectCategory;
