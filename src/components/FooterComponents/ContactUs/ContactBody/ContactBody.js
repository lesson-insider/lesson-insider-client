import React from "react";

import styles from "./ContactBody.module.css";

import contact1 from "../../../../icons/contact/contact1.png";
import customerService2 from "../../../../icons/contact/customerService2.png";
import gmail from "../../../../icons/contact/gmail.png";
import email1 from "../../../../icons/contact/email1.png";
import facebook1 from "../../../../icons/about/facebook.png";
export default function ContactBody() {
    return (
        <div className={styles.ContactBody}>
            <div className={styles.Contact}>
                <img className={styles.contactIcon} src={contact1} alt="" />

                <div className={styles.contactText}>
                    <h1>Contact Us</h1>
                    <div className={styles.contactTextDetails}>
                        <h4 className={styles.singleContact}>
                            {" "}
                            <span>
                                <img src={customerService2} alt="" />
                            </span>{" "}
                            017********
                        </h4>
                        <h4 className={styles.singleContact}>
                            {" "}
                            <span>
                                <img src={facebook1} alt="" />
                            </span>{" "}
                            /lesson-insider
                        </h4>
                        <h4 className={styles.singleContact}>
                            {" "}
                            <span>
                                <img
                                    className={styles.emailIcon}
                                    src={gmail}
                                    alt=""
                                />
                            </span>{" "}
                            lesson.insider@gmail.com
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
