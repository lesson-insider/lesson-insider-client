import React from "react";
import styles from "./Mentorship.module.css";
import usersProfilePicture from "../../../../images/Home/UserProfilePicture/photo1.jpg";
import { Button, Col, Row } from "react-bootstrap";
import {
    BsArrowReturnRight,
    BsFillCheckCircleFill,
    BsFillHeartFill,
    BsThreeDots,
} from "react-icons/bs";
import { FcGraduationCap, FcRating } from "react-icons/fc";
import { BiBookReader } from "react-icons/bi";
import { MdBatchPrediction } from "react-icons/md";
import { ListGroup, Tab, Tabs } from "react-bootstrap";

import { FaHeartBroken } from "react-icons/fa";
import Comment from "../Comments/Comment";
import follow1 from "../../../../icons/home/follow1.png";
import facebook from "../../../../icons/about/facebook.png";
import youtube from "../../../../icons/about/youtube.png";
import linkedin2 from "../../../../icons/about/linkedin2.png";

export default function Mentorship({ contentStatus }) {
    return (
        <div className={styles.mentor}>
            <div className={styles.header}>
                <img
                    className={styles.userPicture}
                    src={usersProfilePicture}
                    alt=""
                />
                <div className={styles.userDetails}>
                    <div className={styles.nameAndOption}>
                        <h5 className={styles.userName}>
                            Mohammad Bin Ab. Jalil Sheakh{" "}
                            <span className={styles.blueTikMark}>
                                <BsFillCheckCircleFill />
                            </span>
                        </h5>
                        <button className={styles.postOptionsButton}>
                            <BsThreeDots
                                className={styles.postOptionsButtonColor}
                            />
                        </button>
                    </div>

                    <h6 className={styles.institution}>
                        <span className={styles.institutionIconGap}>
                            <FcGraduationCap
                                className={styles.institutionIcon}
                            />
                        </span>
                        American International University of Bangladesh
                    </h6>
                    <h6>
                        <BiBookReader className={styles.institutionIcon} />
                        <span className={styles.infoText}>
                            CSE{" "}
                            {/* <span>
                                <MdBatchPrediction />
                            </span>{" "} */}
                            Batch 20-1
                        </span>
                    </h6>
                    <div className={styles.ratingAndTagBlock}>
                        <h4 className={styles.contentRating}>
                            <span>
                                <FcRating className={styles.ratingIcon} />
                            </span>
                            rating: 3.7
                        </h4>
                        {contentStatus === "free" ? (
                            <h6 className={styles.freeTag}>Free</h6>
                        ) : (
                            <h6 className={styles.paidTag}>Paid</h6>
                        )}
                    </div>
                </div>
            </div>

            {/* <hr /> */}

            <div className={styles.skillAboutCommentTab}>
                <Tabs
                    defaultActiveKey="skill"
                    id="uncontrolled-tab-example"
                    className="mb-0"
                >
                    <Tab
                        eventKey="skill"
                        title="Skill"
                        className={styles.skillTab}
                    >
                        <div className={styles.linksBlock}>
                            {/* These options should be clickable */}
                            <div className={styles.skill}>Mongo DB</div>
                            <div className={styles.skill}>React Js</div>
                            <div className={styles.skill}>Node Js</div>
                            <div className={styles.skill}>Express Js</div>
                        </div>
                    </Tab>
                    <Tab
                        eventKey="about"
                        title="About"
                        className={styles.aboutTab}
                    >
                        একজন ছাত্র, ওয়েব ডেভেলপার, এন্থুজিয়াস্ট... কাজ করছি
                        লেসন ইনসাইডার নিয়ে ... ফেসবুকে আপডেটেড থাকুন
                        🌐fb.com/mohammadsheakh.mern/ একজন ছাত্র, ওয়েব ডেভেলপার,
                        এন্থুজিয়াস্ট... কাজ করছি লেসন ইনসাইডার নিয়ে ... ফেসবুকে
                        আপডেটেড থাকুন 🌐fb.com/mohammadsheakh.mern/ একজন ছাত্র,
                        ওয়েব ডেভেলপার, এন্থুজিয়াস্ট... কাজ করছি লেসন ইনসাইডার
                        নিয়ে ... ফেসবুকে আপডেটেড থাকুন
                        🌐fb.com/mohammadsheakh.mern/
                    </Tab>
                    <Tab
                        eventKey="comment"
                        title="Comments"
                        className={styles.commentTab}
                        // disabled
                    >
                        <div className={styles.CommentBody}>
                            <div className={styles.mainComment}>
                                <img
                                    className={styles.userPictureForComment}
                                    src={usersProfilePicture}
                                    alt=""
                                />
                                <div className={styles.userDetails}>
                                    <div className={styles.nameAndComment}>
                                        <h5
                                            className={
                                                styles.userNameForComment
                                            }
                                        >
                                            Mohammad Bin Ab. Jalil Sheakh{" "}
                                            <span
                                                className={styles.blueTikMark}
                                            >
                                                <BsFillCheckCircleFill />
                                            </span>
                                        </h5>
                                        <h5 className={styles.usersComment}>
                                            <BsArrowReturnRight
                                                className={styles.commentIcon}
                                            />
                                            <span
                                                className={styles.commentText}
                                            >
                                                স্যারকে অনেক ধন্যবাদ এতো ভালো
                                                পড়ানোর জন্য 😀❤
                                            </span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.reactAndReply}>
                                <button className={styles.loveButton}>
                                    <BsFillHeartFill
                                        className={styles.loveIcon}
                                    />
                                </button>
                                <button className={styles.loveButton}>
                                    <FaHeartBroken
                                        className={styles.loveIcon}
                                    />
                                </button>
                                {/* স্যার এর কাছে যারা পড়ছে তারাই শুধু কমেন্ট করতে পারবে 
                                    বাইরের কেও কমেন্ট করতে পারবে না ... 
                                    */}
                                <button className={styles.replyBtn}>
                                    reply
                                </button>
                                <button className={styles.commentOptionsButton}>
                                    <BsThreeDots
                                        className={
                                            styles.postOptionsButtonColor
                                        }
                                    />
                                </button>
                                <Comment />
                                {/* <div className={styles.mainReply}>
                                
                                </div> */}
                                {/* // এখানে রিপ্লাই লেখার ডিভ */}
                            </div>
                            {/* // এখানে নতুন কমেন্ট লেখার ডিভ */}
                        </div>
                    </Tab>
                    <Tab
                        eventKey="links"
                        title="Links"
                        // disabled
                    >
                        <div className={styles.linksBlock}>
                            {/* <a
                                target="_blank"
                                href="https://www.facebook.com/mohammadsheakh.mern/"
                            >
                                <i class="fab fa-2x fa-facebook "> </i>
                            </a>
                            <a
                                target="_blank"
                                href="https://www.youtube.com/channel/UCBpDPLYKRBkjXqGY6Mz_IDA/videos"
                            >
                                <i class="fab fa-2x fa-youtube "></i>
                            </a>
                            <a target="_blank" href="#">
                                <i class="fas fa-2x fa-envelope "></i>
                                
                            </a>
                            <a target="_blank" href="#">
                                <i class="fab fa-2x fa-instagram "></i>
                            </a> */}
                            <div className={styles.icons}>
                                <a
                                    href="https://www.facebook.com/engr.mustaquenadim"
                                    target="_blank"
                                >
                                    <img
                                        src={facebook}
                                        className={styles.icon}
                                        alt=""
                                    />
                                </a>
                                <a href="" target="_blank">
                                    <img
                                        src={youtube}
                                        className={styles.icon}
                                        alt=""
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/mustaquenadim/"
                                    target="_blank"
                                >
                                    <img
                                        src={linkedin2}
                                        className={styles.icon}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
            <div className={styles.followConnectBtnGroup}>
                <button className={styles.followBtn}>
                    {" "}
                    <span>{/* <img src={follow1} alt="" /> */}</span>
                    Follow
                </button>
                <button className={styles.ConnectBtn}>Connect</button>
            </div>
        </div>
    );
}
