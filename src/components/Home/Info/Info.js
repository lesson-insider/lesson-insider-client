import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Info.module.css";

import { FaQuoteLeft } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Info() {
    return (
        <Container fluid>
            <Row>
                <Col lg={2}></Col>
                <Col lg={7}>
                    <div className={styles.info}>
                        <div>
                            <img
                                className={styles.image}
                                src="https://mir-s3-cdn-cf.behance.net/user/276/d8b548384867537.5d243f286a828.jpg"
                                alt=""
                            />
                            <div className={styles.designation}>
                                <h5>
                                    Nadim Mustaque{" "}
                                    <span className={styles.blueTikMark}>
                                        <BsFillCheckCircleFill />
                                    </span>
                                </h5>
                                <h6>Founder And Admin </h6>
                                <h6>of Lesson Insider</h6>
                            </div>
                        </div>
                        <div className={styles.infoText}>
                            <FaQuoteLeft className={styles.quoteIcon} />
                            <h4>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laudantium, necessitatibus
                                assumenda. Esse, ratione quam? Nobis hic cumque
                                beatae maiores dicta doloribus alias voluptatum
                            </h4>
                        </div>
                    </div>
                </Col>
                <Col lg={3}></Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col lg={3}></Col>

                <Col lg={2}></Col>
                <Col lg={7}>
                    <div className={styles.info}>
                        <div>
                            <img
                                className={styles.image}
                                src="https://mir-s3-cdn-cf.behance.net/user/276/d8b548384867537.5d243f286a828.jpg"
                                alt=""
                            />
                            <div className={styles.designation}>
                                <h5>
                                    Nadim Mustaque{" "}
                                    <span className={styles.blueTikMark}>
                                        <BsFillCheckCircleFill />
                                    </span>
                                </h5>
                                <h6>Founder And Admin </h6>
                                <h6>of Lesson Insider</h6>
                            </div>
                        </div>
                        <div className={styles.infoText}>
                            <FaQuoteLeft className={styles.quoteIcon} />
                            <h4>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laudantium, necessitatibus
                                assumenda. Esse, ratione quam? Nobis hic cumque
                                beatae maiores dicta doloribus alias voluptatum
                            </h4>
                        </div>
                    </div>
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col lg={2}></Col>
                <Col lg={7}>
                    <div className={styles.info}>
                        <div>
                            <img
                                className={styles.image}
                                src="https://mir-s3-cdn-cf.behance.net/user/276/d8b548384867537.5d243f286a828.jpg"
                                alt=""
                            />
                            <div className={styles.designation}>
                                <h5>
                                    Nadim Mustaque{" "}
                                    <span className={styles.blueTikMark}>
                                        <BsFillCheckCircleFill />
                                    </span>
                                </h5>
                                <h6>Founder And Admin </h6>
                                <h6>of Lesson Insider</h6>
                            </div>
                        </div>
                        <div className={styles.infoText}>
                            <FaQuoteLeft className={styles.quoteIcon} />
                            <h4>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laudantium, necessitatibus
                                assumenda. Esse, ratione quam? Nobis hic cumque
                                beatae maiores dicta doloribus alias voluptatum
                            </h4>
                        </div>
                    </div>
                </Col>
                <Col lg={3}></Col>
            </Row>
        </Container>
    );
}
