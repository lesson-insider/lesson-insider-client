import React from "react";
import CurrentTopic from "./CurrentTopic/CurrentTopic";
import styles from "./CurrentTopics.module.css";
import book1 from "../../../icons/home/book1.png";
import book3 from "../../../icons/home/book3.png";
import book4 from "../../../icons/home/book4.png";
import book5 from "../../../icons/home/book5.png";
import book6 from "../../../icons/home/book6.png";
import blub1 from "../../../icons/home/blub1.png";
import note1 from "../../../icons/home/note1.png";
import note2 from "../../../icons/home/note2.png";
import note3 from "../../../icons/home/note3.png";

import brain2 from "../../../icons/home/brain2.png";
import { Col, Row } from "react-bootstrap";
{
    /* <a href="https://www.flaticon.com/free-icons/book" title="book icons">
    Book icons created by Smashicons - Flaticon
</a>; */
}

{
    /* <div className={styles.main}>
            <div>
                <CurrentTopic
                    iconImage={book1}
                    topicTitle="SSC Full Lectures"
                />
            </div>
            <div>
                <CurrentTopic iconImage={book3} topicTitle="HSC All Notes" />
            </div>
            <div>
                <CurrentTopic iconImage={book5} topicTitle="BCS Preparation" />
            </div>
            <div>
                <CurrentTopic
                    iconImage={book6}
                    topicTitle="University Admission Guide"
                />
            </div>

            <div>
                <CurrentTopic
                    iconImage={blub1}
                    topicTitle="Govt. School Admission"
                />
            </div>

            <div>
                <CurrentTopic iconImage={book4} topicTitle="Job Preparation" />
            </div>
            <div>
                <CurrentTopic
                    iconImage={note1}
                    topicTitle="Higher Study Materials"
                />
            </div>

            <div>
                <CurrentTopic iconImage={note2} topicTitle="Vocational Study" />
            </div>
            <div>
                <CurrentTopic iconImage={note3} topicTitle="Islamic Study" />
            </div>

            <div>
                <CurrentTopic
                    iconImage={note3}
                    topicTitle="Skill Development"
                />
            </div>
            <div>
                <CurrentTopic
                    iconImage={brain2}
                    topicTitle="Agriculture Learning"
                />
            </div>
            <div>
                <CurrentTopic iconImage={brain2} topicTitle="Language Course" />
            </div>
        </div> */
}

export default function CurrentTopics() {
    return (
        <>
            <Row>
                <Col lg={1} sm={0} xs={0}></Col>
                <Col lg={2} sm={2} xs={2} className={styles.item}>
                    <CurrentTopic
                        iconImage={book1}
                        topicTitle="SSC Full Lectures"
                    />
                </Col>
                <Col lg={2} sm={2} xs={2} className={styles.item}>
                    <CurrentTopic
                        iconImage={book3}
                        topicTitle="HSC All Notes"
                    />
                </Col>
                <Col lg={2} sm={2} xs={2} className={styles.item}>
                    <CurrentTopic
                        iconImage={book5}
                        topicTitle="BCS Preparation"
                    />
                </Col>
                <Col lg={2} sm={2} xs={2} className={styles.item}>
                    <CurrentTopic
                        iconImage={book6}
                        topicTitle="University Admission Guide"
                    />
                </Col>
                <Col lg={2} sm={2} xs={2} className={styles.item}>
                    <CurrentTopic
                        iconImage={blub1}
                        topicTitle="Govt. School Admission"
                    />
                </Col>
                <Col lg={1} sm={1} xs={0}></Col>
            </Row>
            <Row>
                <Col lg={1}></Col>
                <Col lg={2} sm={2} xs={2} className={styles.item}>
                    <CurrentTopic
                        iconImage={book4}
                        topicTitle="Job Preparation"
                    />
                </Col>
                <Col lg={2} sm={2} xs={2} className={styles.item}>
                    <CurrentTopic
                        iconImage={note1}
                        topicTitle="Higher Study Materials"
                    />
                </Col>
                <Col lg={2} sm={2} xs={2} className={styles.item}>
                    <CurrentTopic
                        iconImage={note2}
                        topicTitle="Vocational Study"
                    />
                </Col>
                <Col lg={2} sm={2} xs={2} className={styles.item}>
                    <CurrentTopic
                        iconImage={note3}
                        topicTitle="Islamic Study"
                    />
                </Col>
                <Col lg={2} sm={2} xs={2} className={styles.item}>
                    <CurrentTopic
                        iconImage={note3}
                        topicTitle="Skill Development"
                    />
                </Col>
                <Col lg={1}></Col>
            </Row>
        </>
    );
}
