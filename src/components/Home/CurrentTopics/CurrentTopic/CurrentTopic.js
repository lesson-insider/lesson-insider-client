//rfc
import React from "react";
import styles from "./CurrentTopic.module.css";
import { RiBookReadFill } from "react-icons/ri";

export default function CurrentTopic({ topicTitle, iconImage }) {
    return (
        <div className={styles.topicMain}>
            <div>
                {/* <RiBookReadFill className={styles.icon} /> */}
                <img src={iconImage} className={styles.icon} alt="" />
            </div>
            <h6 className={styles.topicTitle}>{topicTitle}</h6>
        </div>
    );
}
