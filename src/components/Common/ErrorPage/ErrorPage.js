import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className={styles.ErrorPageBody}>
                <hr />
                <div className={styles.ErrorTextDiv}>
                    <h1>YOU ARE NOT ALLOWED TO VIEW THIS PAGE !</h1>
                    <Button as={Link} to="/">
                        Go Back to Lesson Insider Home Page
                    </Button>
                </div>

                <hr />
            </div>
        </>
    );
}
