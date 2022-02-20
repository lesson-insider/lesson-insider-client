import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import QuestionFormForDiscussion from "../../../../components/Discussion/QuestionFormForDiscussion/QuestionFormForDiscussion";
import SignUpForm from "../SignUpForm/SignUpForm";
import styles from "./UserSignUpFormModal.module.css";
export default function UserSignUpFormModal({ showStatus }) {
    const [show, setShow] = useState({ showStatus }); // by default true

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
                Sign Up Form
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
                <SignUpForm handleCloseModalButton={handleClose} />
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
