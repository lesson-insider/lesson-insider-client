import React from "react";
import { Col, Row } from "react-bootstrap";
import Mentorship from "../../../components/Profile/UserMentorship/Mentorship/Mentorship";
import OnlineFriends from "../../../components/UsersHome/OnlineFriends/OnlineFriends";
import Posts from "../../../components/UsersHome/Posts/Posts";
import CoverPhoto from "../../../components/Profile/UserProfile/CoverPhoto/CoverPhoto";
import UsersIntro from "../../../components/Profile/UserProfile/UsersIntro/UsersIntro";
import UsersNavbar from "../../../components/Profile/UserProfile/UsersNavbar/UsersNavbar";
import add from "../../../icons/mentorship/add1.png";
import Footer from "../../../components/Common/Footer/Footer";

import styles from "./UserMentorship.module.css";
export default function UserMentorship() {
    return (
        <div className={styles.mentorship}>
            <CoverPhoto />
            <UsersNavbar />
            <UsersIntro />
            <hr />
            <Row>
                <Col xl={2} lg={2} sm={2} xs={0} className={styles.userHome}>
                    <div className={styles.addProfile}>
                        <img className={styles.addPicture} src={add} alt="" />
                    </div>
                    <h1>
                        এখানে কিছু অপশন থাকবে... ব্যাচ ক্রিয়েট করা , এডিট করা
                        এইসব, ব্যাচের স্টুডেন্ট রিলেটেড
                    </h1>
                </Col>
                <Col xl={8} lg={8} sm={10} xs={12} className={styles.PostsBody}>
                    <Mentorship />
                    <Mentorship />
                    <Mentorship />
                    <Mentorship />
                </Col>
                <Col
                    xl={2}
                    lg={2}
                    sm={0}
                    xs={0}
                    className={styles.onlineFriendPosition}
                >
                    {/* <HomeNotifications /> */}
                    <OnlineFriends />
                </Col>
            </Row>
            <Footer />
        </div>
    );
}
