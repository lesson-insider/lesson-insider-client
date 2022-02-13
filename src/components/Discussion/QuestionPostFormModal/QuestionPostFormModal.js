import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CreateNewPostForm from "../../Profile/UserProfile/CreateNewPostForm/CreateNewPostForm";
import QuestionFormForDiscussion from "../QuestionFormForDiscussion/QuestionFormForDiscussion";
import styles from "./QuestionPostFormModal.module.css";
export default function QuestionPostFormModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        // className={styles.LessonInsider}
        <>
            <Button
                className={styles.questionPostButton}
                // variant="primary"
                onClick={handleShow}
            >
                Click to Post a Question
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className={styles.modalPosition}
            >
                {/* <Modal.Header closeButton>
                    <Modal.Title>Write a Question</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to
                    press escape key.
                </Modal.Body> */}

                {/* <CreateNewPostForm /> */}
                <QuestionFormForDiscussion
                    handleCloseModalButton={handleClose}
                />
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Post</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}
