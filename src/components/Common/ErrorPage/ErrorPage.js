import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Link, useNavigate, useLocation } from "react-router-dom";

import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
    const navigate = useNavigate();
    const { key: keyLocation } = useLocation();
    const handleGoBack = () => {
        const isInitialLocation = keyLocation === "default"; // <-- This value is always "default" on the initial location.
        const to = isInitialLocation ? "/" : -1;
        navigate(to);
    };
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
                        Go to Lesson Insider Home Page
                    </Button>
                    <Button onClick={handleGoBack}>
                        Go Back to Previous Page
                    </Button>
                </div>

                <hr />
            </div>
        </>
    );
}
