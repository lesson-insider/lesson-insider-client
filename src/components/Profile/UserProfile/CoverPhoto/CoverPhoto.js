import React from "react";
import styles from "./CoverPhoto.module.css";
import coverProfile from "../../../../images/UsersProfile/UsersPhoto/coverProfile1.jpg";
import { Image } from "react-bootstrap";
export default function CoverPhoto() {
    return (
        <Image
            // className={styles.coverphoto}
            width="100%"
            height="400px"
            src={coverProfile}
        />
    );
}
