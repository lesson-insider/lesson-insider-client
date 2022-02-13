import React from "react";
import styles from "./Comment.module.css";
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

export default function Comment() {
    return (
        <div className={styles.CommentBody}>
            <div className={styles.mainComment}>
                {/* <img
                    className={styles.userPictureForComment}
                    src={usersProfilePicture}
                    alt=""
                /> */}
                <div className={styles.userDetails}>
                    <div className={styles.nameAndComment}>
                        <h5 className={styles.userNameForComment}>
                            Mohammad Bin Ab. Jalil Sheakh{" "}
                            <span className={styles.blueTikMark}>
                                <BsFillCheckCircleFill />
                            </span>
                        </h5>
                        <h5 className={styles.usersComment}>
                            <BsArrowReturnRight
                                className={styles.commentIcon}
                            />
                            <span className={styles.commentText}>
                                স্যারকে অনেক ধন্যবাদ এতো ভালো পড়ানোর জন্য 😀❤
                            </span>
                        </h5>
                    </div>
                </div>
            </div>
            <div className={styles.reactAndReply}>
                <button className={styles.loveButton}>
                    <BsFillHeartFill className={styles.loveIcon} />
                </button>
                <button className={styles.loveButton}>
                    <FaHeartBroken className={styles.loveIcon} />
                </button>
                {/* স্যার এর কাছে যারা পড়ছে তারাই শুধু কমেন্ট করতে পারবে 
                                    বাইরের কেও কমেন্ট করতে পারবে না ... 
                                    */}
                <button className={styles.replyBtn}>reply</button>
                <button className={styles.commentOptionsButton}>
                    <BsThreeDots className={styles.postOptionsButtonColor} />
                </button>
                {/* <div className={styles.mainReply}>

                                </div> */}
                {/* // এখানে রিপ্লাই লেখার ডিভ */}
            </div>
            {/* // এখানে নতুন কমেন্ট লেখার ডিভ */}
        </div>
    );
}
