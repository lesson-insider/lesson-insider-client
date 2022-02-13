import React from "react";
import styles from "./Messages.module.css";
import HomeNotification from "./Message/Message";
import photo3 from "../../../images/Home/UserProfilePicture/photo3.jpg";
import photo4 from "../../../images/Home/UserProfilePicture/photo4.jpg";
import photo5 from "../../../images/Home/UserProfilePicture/photo5.jpg";
import photo1 from "../../../images/Home/UserProfilePicture/photo1.jpg";
import photo2 from "../../../images/Home/UserProfilePicture/photo2.jpg";
import { Accordion, Col, Row } from "react-bootstrap";
export default function Messages() {
    return (
        <Accordion className={styles.NotificationBody} defaultActiveKey="0">
            <Accordion.Item eventKey="0" className={styles.AccordionItem}>
                <Accordion.Header className={styles.NotificationHeader}>
                    <h3>Messages</h3>
                    {/* <button>fd</button> */}
                </Accordion.Header>
                <Accordion.Body className={styles.AccordionBody}>
                    <Row className={styles.MessageGroupOptions}>
                        <Col className={styles.MessageGroupOption}>All</Col>
                        <Col className={styles.MessageGroupOption}>Friends</Col>
                        <Col className={styles.MessageGroupOption}>
                            Students
                        </Col>
                        <Col className={styles.MessageGroupOption}>Mentors</Col>
                        <Col className={styles.MessageGroupOption}>Seniors</Col>
                        <Col className={styles.MessageGroupOption}>Groups</Col>
                    </Row>
                    <HomeNotification
                        photo={photo3}
                        notificationTextText="Sami started to following you."
                    />
                    <HomeNotification
                        photo={photo4}
                        notificationTextText="Minhaz accepts you as a Friend."
                    />
                    <HomeNotification
                        photo={photo5}
                        notificationTextText='Minhaz posted an article on "Physics Problems".'
                    />
                    <HomeNotification
                        photo={photo1}
                        notificationTextText="Rabbi wishes to send you 50 taka on Your Note"
                    />
                    <HomeNotification
                        photo={photo2}
                        notificationTextText="Minhaz commented on your post."
                    />
                    <HomeNotification
                        photo={photo2}
                        notificationTextText="Minhaz commented on your post."
                    />
                    <HomeNotification
                        photo={photo2}
                        notificationTextText="Minhaz commented on your post."
                    />
                    <HomeNotification
                        photo={photo2}
                        notificationTextText="Minhaz commented on your post."
                    />
                    <HomeNotification
                        photo={photo2}
                        notificationTextText="Minhaz commented on your post."
                    />
                    <HomeNotification
                        photo={photo2}
                        notificationTextText="Minhaz commented on your post."
                    />
                </Accordion.Body>
            </Accordion.Item>
            {/* <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item> */}
        </Accordion>
    );
}
