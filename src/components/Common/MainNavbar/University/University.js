//rafce
import React from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";

import FacultyOfArtsAndSocialSciences from "./FacultyOfArtsAndSocialSciences/FacultyOfArtsAndSocialSciences";
import FacultyOfBusinessAdministration from "./FacultyOfBusinessAdministration/FacultyOfBusinessAdministration";
import FacultyOfEngineering from "./FacultyOfEngineering/FacultyOfEngineering";
import FacultyOfScienceAndTechnology from "./FacultyOfScienceAndTechnology/FacultyOfScienceAndTechnology";

// import styles from "./OneToTen.module.css";

const University = ({ styles }) => {
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
                    বিশ্ববিদ্যালয়
                </Dropdown.Toggle>

                <div className={styles.customDropDownItems}>
                    <Dropdown.Menu>
                        <FacultyOfScienceAndTechnology styles={styles} />
                        <FacultyOfEngineering styles={styles} />
                        <FacultyOfArtsAndSocialSciences styles={styles} />
                        <FacultyOfBusinessAdministration styles={styles} />
                    </Dropdown.Menu>
                </div>
            </Dropdown>
        </>
    );
};

export default University;
