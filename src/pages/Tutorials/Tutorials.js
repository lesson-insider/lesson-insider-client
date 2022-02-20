import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillAppstore } from "react-icons/ai";
import Options from "../../components/Tutorials/OptionsForTutorials/Options";
import VideoCards from "../../components/Tutorials/VideoCards/VideoCards";
import styles from "./Tutorials.module.css";
export default function Tutorials1() {
    const [positionLeft, setPositionLeft] = useState("0px");
    const handleClickMenu = () => {
        if (positionLeft === "-265px") {
            console.log("ss1", positionLeft);
            setPositionLeft("0px");
        } else if (positionLeft === "0px") {
            console.log("ss2", positionLeft);
            setPositionLeft("-265px");
        } else {
            console.log("ss3", positionLeft);
            setPositionLeft("-265px");
        }
    };
    return (
        <>
            <button onClick={handleClickMenu} className={styles.OpenCloseBtn}>
                <AiFillAppstore className={styles.OpenCloseBtnIcon} />
            </button>
            <div className={styles.masterTutorials}>
                {/* fvfvfv */}
                <div
                    style={{ left: positionLeft }}
                    className={styles.offCanvas}
                >
                    <Options />
                </div>
                <Row>
                    <Col lg={2}></Col>
                    <Col>
                        <VideoCards />
                    </Col>
                </Row>
            </div>
        </>
    );
}
