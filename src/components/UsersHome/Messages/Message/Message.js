import React from "react";
import styles from "./Message.module.css";

export default function Message({ photo, notificationTextText }) {
    return (
        <div className={styles.mainNotification}>
            <div className={styles.notification}>
                <div>
                    <img
                        className={styles.notificationImage}
                        src={photo}
                        alt=""
                    />
                </div>
                <div className={styles.notificationText}>
                    <h6>{notificationTextText}</h6>
                </div>
            </div>
        </div>
    );
}
