import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeNotifications from "../../components/UsersHome/HomeNotifications/HomeNotifications";
import OnlineFriends from "../../components/UsersHome/OnlineFriends/OnlineFriends";
import Options from "../../components/UsersHome/Options/Options";
import Posts from "../../components/UsersHome/Posts/Posts";
import styles from "./UsersHome.module.css";

export default function UsersHome() {
    return (
        <Row className={styles.userHomeMain}>
            <Col className={styles.OptionColumn} xl={3} lg={2}>
                <Options />
            </Col>
            <Col xl={6} lg={8} sm={9} xs={12} className={styles.PostsBody}>
                <Posts />
            </Col>
            <Col xl={3} lg={4} sm={3} xs={0} className={styles.OnlineFriends}>
                <OnlineFriends />
            </Col>
        </Row>
    );
}
