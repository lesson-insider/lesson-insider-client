import React from "react";
import { Col, Row } from "react-bootstrap";
import OnlineFriends from "../../components/UsersHome/OnlineFriends/OnlineFriends";
import Options from "../../components/UsersHome/Options/Options";
import Discussions from "../../components/Discussion/Discussions";
import styles from "./Discussion.module.css";

export default function Discussion() {
    return (
        <Row className={styles.DiscussionMain}>
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

            <Col className={styles.OptionColumn} xl={3} lg={3} sm={2} xs={0}>
                <Options />
            </Col>
            <Col
                xl={9}
                lg={8}
                sm={10}
                xs={12}
                // xs={12}
                className={styles.DiscussionBody}
            >
                <Discussions />
            </Col>
            {/* <Col xl={3} lg={2} sm={0} xs={0}>
                <OnlineFriends />
            </Col> */}
        </Row>
    );
}
