import React, { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import styles from "./UsersIntro.module.css";
import user1 from "../../../../images/UsersProfile/UsersPhoto/user1.jpg";
import user2 from "../../../../images/UsersProfile/UsersPhoto/mohammad1.jpg";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiBookReader, BiLink } from "react-icons/bi";
// import { Link } from "react-router-dom";
import useClipboard from "react-hook-clipboard";
import { IoCall } from "react-icons/io5";
// import { ImOffice } from "react-icons/im";
// import { FaAddressBook, FaGithub, FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { GiBriefcase } from "react-icons/gi";

// import ButtonMailto from "../ButtonMailto/ButtonMailto";
// import { SiMinutemailer } from "react-icons/si";
import {
    FcBriefcase,
    FcGlobe,
    FcGraduationCap,
    FcHome,
    FcSms,
    // FcIdea,
} from "react-icons/fc";

// import { MdLocationCity, MdLocationPin } from "react-icons/md";

export default function UsersIntro() {
    const useridfromweb = window.location.href;
    const [userId, setUserId] = useState("");
    const [clipboard, copyToClipboard] = useClipboard();
    const [usersEmailAddress, setUsersEmailAddress] = useState("");
    const usersEmail = "mohammad.sheakh@gmail.com";

    const linkCopyFromURLhandler = () => {
        setUserId(useridfromweb);
        copyToClipboard(useridfromweb);
    };
    const emailCopyFromUsersEmailHandler = (usersEmail) => {
        setUsersEmailAddress(usersEmail);
        copyToClipboard(usersEmail);
    };
    return (
        <>
            <div>
                <Image
                    className={styles.profilePicture}
                    rounded
                    width="192px"
                    height="218px"
                    // width="11%"
                    src={user2}
                />
            </div>
            <div className={styles.usersInfo}>
                <div className={styles.blankDiv}></div>

                <div className={styles.UserName}>
                    Mohammad Sheakh
                    <span className={styles.blueTikMark}>
                        <BsFillCheckCircleFill />

                        <Button
                            className={styles.linkCopyButton}
                            onClick={linkCopyFromURLhandler}
                        >
                            <BiLink className={styles.linkCopyMark} />
                        </Button>
                        {/* {userId} */}
                    </span>
                    <div className={styles.mainIntroduction}>
                        <div className={styles.institution}>
                            <h6>
                                {/* FcBriefcase */}
                                {/* GiBriefcase */}
                                <FcBriefcase
                                    className={styles.institutionIcon}
                                />
                                <span className={styles.infoText}>
                                    Founder and Admin at Lesson Insider
                                </span>
                            </h6>
                            <h6>
                                {/*   IoSchool*/}
                                <FcGraduationCap
                                    className={styles.institutionIcon}
                                />
                                <span className={styles.infoText}>
                                    Studies at American International University
                                    of Bangladesh
                                </span>
                            </h6>
                            <h6>
                                <BiBookReader
                                    className={styles.institutionIcon}
                                />
                                <span className={styles.infoText}>
                                    CSE 20-42132-1
                                </span>
                            </h6>

                            <h6>
                                {/* MdLocationPin */}
                                <FcHome className={styles.institutionIcon} />
                                <span className={styles.infoText}>
                                    Lives in Rampura, Dhaka, Bangladesh
                                </span>
                            </h6>
                            {/* /////////////////////////////////////////////////////////////// */}

                            {/* <h6>
                                <BiBookReader
                                    className={styles.institutionIcon}
                                />
                                <span className={styles.infoText}>
                                    CSE 20-42132-1
                                </span>
                            </h6> */}
                            <h6>
                                <MdEmail className={styles.institutionIcon} />
                                <a
                                    // href={`mailto:${usersEmail}`}
                                    // target="_blank"
                                    // onClick={linkCopyFromURLhandler}
                                    className={styles.infoText}
                                >
                                    mohammad.sheakh@gmail.com
                                </a>
                                <Button
                                    className={styles.linkCopyButton}
                                    onClick={() =>
                                        emailCopyFromUsersEmailHandler(
                                            usersEmail
                                        )
                                    }
                                >
                                    <BiLink className={styles.linkCopyMark} />
                                </Button>

                                {/* {usersEmailAddress && (
                            <ButtonMailto
                                label="Click this text to write an email to this address"
                                mailto={"mailto:" + usersEmailAddress}
                            />
                        )} */}
                            </h6>
                            <h6>
                                <FcGlobe className={styles.institutionIcon} />
                                <span className={styles.infoText}>
                                    mohammadsheakh.com
                                </span>
                            </h6>
                            <h6>
                                <IoCall className={styles.callIcon} />
                                <span className={styles.infoText}>
                                    01790-583345
                                </span>
                            </h6>
                        </div>
                        <div className={styles.bio}>
                            <h4>Bio..</h4>
                            <h5>
                                lessoninsider.com😍
                                <br /> 20-1 CSE
                                <br /> Web Dev (MERN Stack)
                                <br /> 🤙01790-583345
                                <br /> ফ্রেন্ড রিকু পাঠাইলে ইনবক্স কইরেন😀
                            </h5>
                        </div>
                        <div className={styles.memoryPlusLinks}>
                            {/* <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Save</Button>
                            </Form> */}
                            <Form>
                                <Form.Group
                                // className="mb-3"
                                // controlId="exampleForm.ControlTextarea1"
                                >
                                    <h5>Note.. </h5>
                                    <Form.Control
                                        // as="textarea"
                                        type="search"
                                        // placeholder="Search"
                                        style={{ height: "50px" }}
                                        // rows={2}
                                    />
                                </Form.Group>
                            </Form>
                            <div className={styles.linksBlock}>
                                <a
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
                                    {/* <i>
                                        <FaGithub
                                            className={styles.linksBlockIcon}
                                        />
                                    </i> */}
                                </a>
                                <a target="_blank" href="#">
                                    <i class="fab fa-2x fa-instagram "></i>
                                </a>
                            </div>
                            <div className={styles.followAndMessageButtonBlock}>
                                <button className={styles.connectionButton}>
                                    Add Friend Request
                                </button>
                                {/* <Button>Friend Request Sent</Button> */}
                                <button className={styles.connectionButton}>
                                    Follow
                                </button>
                                <button className={styles.connectionButton}>
                                    <FcSms className={styles.inboxIcon} />
                                    Inbox (6)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
