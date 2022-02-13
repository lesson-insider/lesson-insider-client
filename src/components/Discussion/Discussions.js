import React from "react";
import SingleForm from "../Common/SingleForm/SingleForm";
import Discussion from "./Discussion/Discussion";
import styles from "./Discussions.module.css";
import QuestionPostFormModal from "./QuestionPostFormModal/QuestionPostFormModal";
export default function Discussions() {
    return (
        <div className={styles.discussionAll}>
            <div className={styles.SingleForm}>
                <SingleForm />
            </div>
            <div className={styles.postQuestion}>
                <QuestionPostFormModal />
            </div>

            <div className={styles.DiscussionWrapper}>
                <h4>20 Similar Problem Found !</h4>
                <Discussion />
                <Discussion />
                <Discussion />
                <Discussion />
            </div>
            <div className={styles.extra}></div>
        </div>
    );
}
