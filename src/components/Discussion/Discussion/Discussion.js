import React, { useState } from "react";
import styles from "./Discussion.module.css";
import profilePic from "../../../images/UsersProfile/UsersPhoto/user1.jpg";
import { BsFillCheckCircleFill, BsStarHalf, BsThreeDots } from "react-icons/bs";
import {
    Breadcrumb,
    Button,
    Col,
    OverlayTrigger,
    Row,
    Tooltip,
} from "react-bootstrap";
import { FaRegStarHalf, FaStar, FaStarHalf } from "react-icons/fa";
import { CgFolder } from "react-icons/cg";
import upVote2 from "../../../icons/discussion/upVote2.png";
import downVote2 from "../../../icons/discussion/downVote2.png";
import spand1 from "../../../icons/discussion/spand1.png";
import best1 from "../../../icons/discussion/best1.png";
import answer1 from "../../../icons/discussion/answer1.png";
import codePicture1 from "../../../images/Discussion/codePicture1.png";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";

export default function Discussion({ contentStatus, usersName, studentClass }) {
    const [audioDetails, setAudioDetails] = useState({
        url: null,
        blob: null,
        chunks: null,
        duration: {
            h: 0,
            m: 0,
            s: 0,
        },
    });
    const [Height, setHeight] = useState("250px");
    const [overflowY, setOverflowY] = useState("hidden");
    const handleClickMenu = () => {
        if (Height === "250px") {
            setHeight("400px");

            setOverflowY("scroll");
        } else if (Height === "400px") {
            setHeight("250px");
            setOverflowY("hidden");
        } else {
            setHeight("250px");
            setOverflowY("hidden");
        }
    };

    // Height == "250px" ? setHeight("400px") : setHeight("0px");

    // Audio record Start
    const handleAudioStop = (data) => {
        console.log("Data => 😀", data);
        console.log("Data => 😁", audioDetails);
        // this.setState({ audioDetails: data });

        setAudioDetails({ audioDetails: data });
    };

    const handleAudioUpload = (file) => {
        console.log(file);
    };

    const handleCountDown = (data) => {
        console.log(data);
    };

    const handleReset = () => {
        const reset = {
            url: null,
            blob: null,
            chunks: null,
            duration: {
                h: 0,
                m: 0,
                s: 0,
            },
        };
        // this.setState({ audioDetails: reset });
        setAudioDetails({ audioDetails: reset });
    };

    // Audio record End
    return (
        <div className={styles.mainDiscussion}>
            <div className={styles.float}>
                <div className={styles.header}>
                    <img
                        src="https://mir-s3-cdn-cf.behance.net/user/276/d8b548384867537.5d243f286a828.jpg"
                        alt=""
                    />
                    <div>
                        <Row>
                            <Col lg={4}>
                                <div className={styles.userNameText}>
                                    <h5 className={styles.userName}>
                                        Nadim Mustaque{" "}
                                        <span className={styles.blueTikMark}>
                                            <BsFillCheckCircleFill />
                                        </span>
                                    </h5>
                                </div>
                            </Col>
                            <Col lg={7}></Col>

                            <Col lg={1}>
                                <button className={styles.postOptionsButton}>
                                    <BsThreeDots
                                        className={
                                            styles.postOptionsButtonColor
                                        }
                                    />
                                </button>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={9}>
                                <Breadcrumb>
                                    <>
                                        <Breadcrumb.Item
                                            // hover korle active class remove hobe
                                            active
                                            href="#"
                                            className={styles.breadcrumbStyle}
                                        >
                                            CSE
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item
                                            active
                                            href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
                                            className={styles.breadcrumbStyle}
                                        >
                                            Database Management
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item
                                            active
                                            className={styles.breadcrumbStyle}
                                        >
                                            ER Diagram
                                        </Breadcrumb.Item>
                                    </>
                                </Breadcrumb>
                            </Col>
                            <Col lg={3}>
                                <div className={styles.userDetails}>
                                    <FaRegStarHalf />
                                    <FaStarHalf />
                                    <BsStarHalf />
                                    <FaStar />

                                    <CgFolder className={styles.classTag} />

                                    <h5 className={styles.classNumber}>12</h5>
                                    {/* Institution Logo 🏫🏫🏫🏫*/}
                                    <OverlayTrigger
                                        placement={"bottom"}
                                        overlay={
                                            <Tooltip id={`tooltip-bottom`}>
                                                <div
                                                    className={
                                                        styles.authorDetails
                                                    }
                                                >
                                                    <strong>
                                                        {/* Institution Name */}
                                                        Dhaka City College
                                                    </strong>
                                                </div>
                                                {/* Send <strong>Money</strong> to creator. */}
                                            </Tooltip>
                                        }
                                    >
                                        <img
                                            src="https://www.unijobsbd.com/images/companylogo/1508318241_emplyr_DCC.jpg"
                                            alt=""
                                            className={styles.institutionLogo}
                                            // logo ta jeno clear bujha jay ...
                                            // hover korle clear nam dekhabe ...
                                        />
                                    </OverlayTrigger>
                                </div>
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col></Col>
                            <Col lg={4} className={styles.tagsButton}>
                                <Button className={styles.buttonTag}>
                                    BGS
                                </Button>
                                <Button className={styles.buttonTag}>
                                    CSE
                                </Button>
                                <Button className={styles.buttonTag}>
                                    Database
                                </Button>
                                <Button className={styles.buttonTag}>
                                    Chemistry
                                </Button>
                            </Col>
                        </Row> */}
                        {/***********===============**************🎯Content Title Starts================********************* */}
                        <div
                            className={styles.discussionPostBody}
                            style={{ height: Height, overflowY: overflowY }}
                        >
                            <div className={styles.discussionPost}>
                                <h4>
                                    Linear programming (LP, also called linear
                                    optimization) is a method to achieve the
                                    best outcome (such as maximum profit or
                                    lowest cost) in a mathematical model whose
                                    requirements are represented by linear
                                    relationships.
                                </h4>
                                <h5>
                                    Linear programming is a special case of
                                    mathematical programming (also known as
                                    mathematical optimization). More formally,
                                    linear programming is a technique for the
                                    optimization of a linear objective function,
                                    subject to linear equality and linear
                                    inequality constraints. Its feasible region
                                    is a convex polytope, which is a set defined
                                    as the intersection of finitely many half
                                    spaces, each of which is defined by a linear
                                    inequality. Its objective function is a
                                    real-valued affine (linear) function defined
                                    on this polyhedron. A linear programming
                                    algorithm finds a point in the polytope
                                    where this function has the smallest (or
                                    largest) value if such a point exists.
                                </h5>

                                {/*🔊 Voice Recorder Here */}
                                <Recorder
                                    className={styles.recording}
                                    record={true}
                                    title={"New recording"}
                                    audioURL={audioDetails.url}
                                    showUIAudio
                                    handleAudioStop={(data) =>
                                        handleAudioStop(data)
                                    }
                                    handleAudioUpload={(data) =>
                                        handleAudioUpload(data)
                                    }
                                    handleCountDown={(data) =>
                                        handleCountDown(data)
                                    }
                                    handleReset={() => handleReset()}
                                    mimeTypeToUseWhenRecording={`audio/webm`} // For specific mimetype.
                                />
                            </div>

                            <div className={styles.discussionPostPictureArea}>
                                <Row>
                                    <Col lg={4}></Col>
                                    <Col lg={4} className={styles.tagsButton}>
                                        <button className={styles.buttonTag}>
                                            BGS
                                        </button>
                                        <button className={styles.buttonTag}>
                                            CSE
                                        </button>
                                        <button className={styles.buttonTag}>
                                            Database
                                        </button>
                                        <button className={styles.buttonTag}>
                                            Chemistry
                                        </button>
                                    </Col>
                                </Row>
                                <div className={styles.discussionPostPicture}>
                                    <div className={styles.discussEveryPicture}>
                                        <img
                                            src={codePicture1}
                                            alt=""
                                            className={
                                                styles.discussEachPicture
                                            }
                                        />
                                    </div>

                                    <div className={styles.discussEveryPicture}>
                                        <img
                                            src={codePicture1}
                                            alt=""
                                            className={
                                                styles.discussEachPicture
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/***********===============****************Content Title Ends***********====================********************* */}
                        <hr />
                        <Row className={styles.DiscussionFooter}>
                            <Col lg={3}>
                                {/* <img src={upVote2} alt="" />
                                <span>14</span>
                                <img src={downVote2} alt="" />
                                <span>9</span> */}
                                <span>
                                    <img
                                        className={styles.answerIcon}
                                        src={answer1}
                                        alt=""
                                    />
                                </span>
                                <h4 className={styles.problemStatusOption}>
                                    23 Answers
                                </h4>
                            </Col>
                            <Col lg={3}>
                                <h4 className={styles.problemStatusOption}>
                                    5 Best Answers
                                </h4>
                                <span>
                                    <img
                                        className={styles.upVoteIcon}
                                        src={best1}
                                        alt=""
                                    />
                                </span>
                            </Col>
                            <Col lg={3}>
                                <h4 className={styles.problemStatusOption}>
                                    Problem Solved
                                </h4>
                                <span>
                                    <img
                                        className={styles.upVoteIcon}
                                        src={upVote2}
                                        alt=""
                                    />
                                </span>
                            </Col>
                            <Col lg={3}>
                                <span>
                                    <img
                                        onClick={handleClickMenu}
                                        className={styles.spandIcon}
                                        src={spand1}
                                        alt=""
                                    />
                                </span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}
