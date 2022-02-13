import React from "react";
import { Accordion } from "react-bootstrap";
import styles from "./QnA.module.css";
export default function QnA({ eventKey, header, body }) {
    return (
        <div>
            <Accordion.Item eventKey={eventKey}>
                <Accordion.Header>
                    <div className={styles.header}>{header}</div>
                </Accordion.Header>
                <Accordion.Body className={styles.body}>{body}</Accordion.Body>
            </Accordion.Item>
        </div>
    );
}
