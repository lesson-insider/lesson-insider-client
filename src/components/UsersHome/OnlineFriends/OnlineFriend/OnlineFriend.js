import React from "react";
import { FcSms } from "react-icons/fc";
import styles from "./OnlineFriend.module.css";

export default function OnlineFriend({ photo, onlineFriendTextText }) {
    return (
        <div className={styles.MainOnlineFriend}>
            <div className={styles.onlineFriend}>
                <div>
                    <img
                        className={styles.onlineFriendImage}
                        src={photo}
                        alt=""
                    />
                </div>
                <div className={styles.onlineFriendText}>
                    <h6>
                        {onlineFriendTextText}{" "}
                        <span>
                            <FcSms />
                        </span>
                    </h6>
                </div>
            </div>
        </div>
    );
}
