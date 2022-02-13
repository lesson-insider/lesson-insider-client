//rafce
import React from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";
// import styles from "./OneToTen.module.css";
const Six = ({ styles }) => {
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
                    ষষ্ঠ
                </Dropdown.Toggle>

                <div className={styles.customDropDownItems}>
                    <Dropdown.Menu>
                        {/* ----------------------- বিষয়ভিত্তিক > সমাধান > সিরিয়াস Dropdown----------------------------------- */}
                        <Dropdown>
                            <Dropdown.Item to="#/action-1">
                                আনন্দ পাঠ(বাংলা দ্রুত পঠন)
                            </Dropdown.Item>
                            <Dropdown.Item to="#/action-2">
                                English for Today
                            </Dropdown.Item>
                            <Dropdown.Item to="#/action-2">গণিত</Dropdown.Item>
                            <Dropdown.Item to="#/action-4">
                                বাংলা ব্যাকরণ ও নির্মিতি
                            </Dropdown.Item>
                            <Dropdown.Item to="#/action-5">
                                English Grammer and Composition
                            </Dropdown.Item>
                            <Dropdown.Item to="#/action-6">
                                {" "}
                                বিজ্ঞান
                            </Dropdown.Item>
                            <Dropdown.Item to="#/action-2">
                                তথ্য ও যোগাযোগ প্রযুক্তি
                            </Dropdown.Item>
                            <Dropdown.Item to="#/action-2">
                                চারুপাঠ
                            </Dropdown.Item>
                            <Dropdown.Item to="#/action-2">
                                বাংলাদেশ ও বিশ্বপরিচয়
                            </Dropdown.Item>
                            <Dropdown.Item to="#/action-2">
                                ইসলাম ও নৈতিক শিক্ষা
                            </Dropdown.Item>
                            <Dropdown.Item to="#/action-2">
                                কৃষি শিক্ষা
                            </Dropdown.Item>
                            <Dropdown.Item to="#/action-2">
                                কর্ম ও জীবনমুখী শিক্ষা
                            </Dropdown.Item>
                            <Dropdown.Item to="#/action-2">
                                শারীরিক শিক্ষা ও স্বাস্থ্য
                            </Dropdown.Item>
                            <Dropdown.Item to="#/action-2">
                                গার্হস্থ্য বিজ্ঞান
                            </Dropdown.Item>
                            <Dropdown.Item to="#/action-2">আরবি</Dropdown.Item>

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
export default Six;
