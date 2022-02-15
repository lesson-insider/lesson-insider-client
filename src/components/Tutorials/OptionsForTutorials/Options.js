import React from "react";
import { useState } from "react";
import Option from "../../../components/UsersHome/Options/Option/Option";

import styles from "./Options.module.css";

export default function Options() {
    return (
        <>
            <div className={styles.MainOptions}>
                <div>
                    <Option optionName="1 Trending Notes" to="/home" />
                </div>
                <div>
                    <Option optionName="2 Trending Tutorials" to="mentorship" />
                </div>
                <div>
                    <Option optionName="3 Trending Feature" />
                </div>
                <div>
                    <Option optionName="4 Mentors of the week" />
                </div>
                <div>
                    <Option optionName="5 Mentors of the month" />
                </div>
                <div>
                    <Option optionName="6 Award Center" />
                </div>
                <div>
                    <Option optionName="7 Upcoming Events" />
                </div>
                <div>
                    <Option optionName="8 Upcoming" />
                </div>
                <div>
                    <Option optionName="9 Upcoming Batches" />
                </div>
                <div>
                    <Option optionName="10 Paid Promotion" />
                </div>
                <div>
                    <Option optionName="11 Free Promotion" />
                </div>
                <div>
                    <Option optionName="12 Education Based Next Hit Projects" />
                </div>
                <div>
                    <Option optionName="13 Next Months Plan" />
                </div>
                <div>
                    <Option optionName="14 Next Year Plan" />
                </div>
                <div>
                    <Option optionName="15 Tips And Tricks" />
                </div>
                <div>
                    <Option optionName="16 Be Our Campus ambassador" />
                </div>
                <div>
                    <Option optionName="17 News And Views" />
                </div>
                <div>
                    <Option optionName="18 Lesson Insider Team" />
                </div>
                <div>
                    <Option optionName="19 Contact Us" />
                </div>
                <div>
                    <Option optionName="20 Report Us" />
                </div>
                <div>
                    <Option optionName="21 Apply For Badge" />
                </div>
                <div>
                    <Option optionName="22 Be Our Volunteer" />
                </div>
            </div>
        </>
    );
}
