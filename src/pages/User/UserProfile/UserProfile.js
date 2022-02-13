import React from "react";
import { Col, Row } from "react-bootstrap";
import CoverPhoto from "../../../components/Profile/UserProfile/CoverPhoto/CoverPhoto";
import UsersIntro from "../../../components/Profile/UserProfile/UsersIntro/UsersIntro";
import UsersNavbar from "../../../components/Profile/UserProfile/UsersNavbar/UsersNavbar";
import styles from "./UsersProfile.module.css";
import Options from "../../../components/UsersHome/Options/Options";

import OnlineFriends from "../../../components/UsersHome/OnlineFriends/OnlineFriends";
import Posts from "../../../components/UsersHome/Posts/Posts";
import HomeNotifications from "../../../components/UsersHome/HomeNotifications/HomeNotifications";
import CreateNewPostForm from "../../../components/Profile/UserProfile/CreateNewPostForm/CreateNewPostForm";

export default function UserProfile() {
    return (
        <div className={styles.profile}>
            <CoverPhoto />
            <UsersNavbar />
            <UsersIntro />
            <hr />
            <Row className={styles.userHome}>
                {/* xl for 100 
                lg for 175
        Main font color            -> # AAA6A2
        Main font color (light)    -> # DDD8D2
        Links color                -> # 9BB6DF
        Links color (visited)      -> # 906F51
        Links header color         -> # 6B886B
        Background color           -> # 101111
        Background light color     -> # 1D1E1F
        Selection color            -> # EEEEEE
        Selection background color -> # 404040
            */}

                <Col xl={3} lg={2} sm={2} xs={0}>
                    {/* <Option /> */}
                    <CreateNewPostForm />
                </Col>
                <Col xl={6} lg={8} sm={10} xs={12} className={styles.PostsBody}>
                    <Posts />
                </Col>
                <Col xl={3} lg={2} sm={0} xs={0}>
                    {/* <HomeNotifications /> */}
                    <OnlineFriends />
                </Col>
            </Row>
        </div>
    );
}
