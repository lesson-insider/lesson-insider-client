import React from "react";
import CircularProgress from "./CircularProgress/CircularProgress";
import styles from "./CircularProgresss.module.css";

export default function CircularProgresss() {
    return (
        <section className={styles.main}>
            <div>
                <CircularProgress percentage="70" title="Student" />
            </div>
            <div>
                <CircularProgress percentage="30" title="Teacher" />
            </div>
            <div>
                <CircularProgress percentage="40" title="General Member" />
            </div>
            <div>
                <CircularProgress percentage="90" title="Mentor" />
            </div>
        </section>
    );
}
