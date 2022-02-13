import React from "react";
import Footer from "../../../components/Common/Footer/Footer";
import styles from "./ContactUs.module.css";

import ContactBody from "../../../components/FooterComponents/ContactUs/ContactBody/ContactBody";
export default function ContactUs() {
    return (
        <div className={styles.ContactBody}>
            <ContactBody />
            <Footer />
        </div>
    );
}
