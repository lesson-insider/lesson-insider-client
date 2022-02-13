import React from "react";
import styles from "./Video.module.css";
export default function Video() {
    return (
        <div className={styles.video}>
            <div>This is from Video</div>
            <video
                width="320"
                height="240"
                controls
                src="../../../videos/video1.mp4"
            ></video>
        </div>
    );
}
