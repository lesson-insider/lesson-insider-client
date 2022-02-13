import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

import styles from "./AboutText.module.css";
export default function AboutText() {
    return (
        <div className={styles.aboutTextBody}>
            <div className={styles.aboutText}>
                <FaQuoteLeft className={styles.quoteIcon} />
                <div className={styles.textOnly}>
                    <h3>
                        Lesson Insider, a beacon of hope for all students,
                        teachers and people who love learning in Bangladesh.
                        This platform is moving at an unstoppable pace with it's
                        motto,{" "}
                        <span className={styles.mottoColor}>
                            {" "}
                            We Learn to Share.{" "}
                        </span>{" "}
                        On this platform you can learn, you can teach, if you
                        have any problem while studying, you can post it and get
                        help. Have a nice learning journey with Lesson Insider
                    </h3>
                </div>
            </div>
        </div>
    );
}
