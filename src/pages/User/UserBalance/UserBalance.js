import React from "react";
import { Col, Row } from "react-bootstrap";
import CoverPhoto from "../../../components/Profile/UserProfile/CoverPhoto/CoverPhoto";
import UsersIntro from "../../../components/Profile/UserProfile/UsersIntro/UsersIntro";
import UsersNavbar from "../../../components/Profile/UserProfile/UsersNavbar/UsersNavbar";
import OnlineFriends from "../../../components/UsersHome/OnlineFriends/OnlineFriends";
import Posts from "../../../components/UsersHome/Posts/Posts";

import styles from "./UserBalance.module.css";
export default function UserBalance() {
    return (
        <div className={styles.balance}>
            <CoverPhoto />
            <UsersNavbar />
            <UsersIntro />
            <hr />
            <Row className={styles.userHome}>
                <Col xl={3} lg={2} sm={2} xs={0}>
                    {/* <Option /> */}
                </Col>
                <Col xl={6} lg={8} sm={10} xs={12} className={styles.PostsBody}>
                    {/* <Posts /> */}
                </Col>
                <Col xl={3} lg={2} sm={0} xs={0}>
                    {/* <HomeNotifications /> */}
                    <OnlineFriends />
                </Col>
            </Row>
        </div>
    );
}
