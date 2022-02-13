import React from "react";
import Footer from "../../../components/Common/Footer/Footer";
import FrequentlyAskingQuestion from "../../../components/FooterComponents/FrequentlyAskingQuestions/FrequentlyAskingQuestion";
import styles from "./FrequentlyAskingQuestions.module.css";
export default function FrequentlyAskingQuestions() {
    return (
        <div className={styles.FAQMaster}>
            <FrequentlyAskingQuestion />
            <Footer />
        </div>
    );
}
