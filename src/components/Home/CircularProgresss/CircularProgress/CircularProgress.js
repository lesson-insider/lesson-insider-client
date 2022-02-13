import React, { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./CircularProgress.module.css";

export default function CircularProgress({ percentage, title }) {
    /// let percentage = 70;
    // useEffect(() => {

    // }, [percentage]);
    return (
        <div className={styles.progressbar}>
            <CircularProgressbar
                value={percentage}
                maxValue="100"
                text={`${percentage}% `}
                strokeWidth="8"
                styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 1,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "round",

                    // Text size
                    textSize: "27px",

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: "#f88",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7",
                })}
            />

            <hr style={{ color: "#ddd8d2" }} />

            <h5 className={styles.progressTitle}>{title}</h5>
        </div>
    );
}
