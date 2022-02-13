import React from "react";
import styles from "./Post.module.css";
import { BsFillCheckCircleFill, BsThreeDots } from "react-icons/bs";
import { FaHotjar, FaStar } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { FaRegStarHalf } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { GiAlliedStar, GiBrain, GiSelfLove } from "react-icons/gi";
import { MdStars } from "react-icons/md";

import { CgFolder } from "react-icons/cg"; // kon class e pore ... shetar logo
import { FcApproval, FcMenu, FcOpenedFolder, FcWorkflow } from "react-icons/fc"; // jei school e pore .. shei institution er logo

import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { AiFillFolderAdd, AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";

import { FaRegSmileBeam } from "react-icons/fa";
import { FaRegLaugh } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { FaRegSadTear } from "react-icons/fa";

import CommentForm from "../../CommentForm/CommentForm";

import {
    Breadcrumb,
    Button,
    Col,
    OverlayTrigger,
    Row,
    Tooltip,
} from "react-bootstrap";

export default function Post({
    usersName,
    usersProfilePicture,
    contentStatus,
    studentClass,
}) {
    return (
        <div className={styles.container}>
            {/* 🔥🔥 */}
            <div className={styles.float}>
                <div className={styles.header}>
                    <img src={usersProfilePicture} alt="" />
                    <div>
                        <Row>
                            <Col xl={7} lg={7} sm={9} xs={9}>
                                <OverlayTrigger
                                    placement={"top"}
                                    overlay={
                                        <Tooltip id={`tooltip-bottom`}>
                                            <div
                                                className={styles.authorDetails}
                                            >
                                                <strong>
                                                    {/* Users Intro*/}
                                                    Bengal Digitalix 😀
                                                    lessoninsider.com😍 20-1 CSE
                                                    Web Dev (MERN Stack)
                                                    01790-583345 send req⏭do
                                                    inbox
                                                </strong>
                                            </div>
                                            {/* Send <strong>Money</strong> to creator. */}
                                        </Tooltip>
                                    }
                                >
                                    <h5 className={styles.userName}>
                                        {usersName}{" "}
                                        <span className={styles.blueTikMark}>
                                            <BsFillCheckCircleFill />
                                        </span>
                                    </h5>
                                </OverlayTrigger>
                            </Col>
                            <Col xl={4} lg={4}></Col>

                            <Col xl={1} lg={1} sm={3} xs={3}>
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
                            <Col lg={8}>
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
                            <Col lg={4}>
                                <div className={styles.userDetails}>
                                    <FaRegStarHalf />
                                    <FaStarHalf />
                                    <BsStarHalf />
                                    <FaStar />
                                    {contentStatus === "Free" ? (
                                        <h6 className={styles.freeTag}>
                                            {contentStatus}
                                        </h6>
                                    ) : (
                                        <h6 className={styles.paidTag}>
                                            {contentStatus}
                                        </h6>
                                    )}

                                    <CgFolder className={styles.classTag} />

                                    {/* <FaRegStar />

                            free content  -> FcPaid

                            active learner -> RiShieldStarLine
                            active teacher -> RiShieldStarFill

                            one to one teacher -> FaChalkboardTeacher
                            one to many teacher-> GiTeacher

                            5 Note -> GrNotes
                            10 Note -> CgNotes
                            Note Starter -> GoNote
                            20 Note -> GiNotebook
                            30 Note -> GiStabbedNote
                            2 Note -> MdOutlineStickyNote2
                            Feature Writer -> MdOutlineEventNote


                        <BsStars />
                        <GiAlliedStar />
                        <MdStars /> */}
                                    <h5 className={styles.classNumber}>
                                        {studentClass}
                                    </h5>
                                    {/* Institution Logo 🏫🏫🏫🏫*/}
                                    <OverlayTrigger
                                        placement={"right"}
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
                        <Row>
                            <Col></Col>
                            {/* lg={} value should be dynamic */}
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
                        </Row>
                        {/***********===============**************🎯Content Title Starts================********************* */}
                        <div>
                            <h4>
                                Linear programming (LP, also called linear
                                optimization) is a method to achieve the best
                                outcome (such as maximum profit or lowest cost)
                                in a mathematical model whose requirements are
                                represented by linear relationships.
                            </h4>
                        </div>
                        {/***********===============****************Content Title Ends***********====================********************* */}
                    </div>
                </div>
            </div>
            {/***********===============*****🎯Post Body Starts**********************====================********************* */}
            <div className={styles.postBody}>
                {/*🔥🔥 Ekhanei Shob dhoroner Content Thakbe  */}
                {/* <h3>This is body</h3>
                <h3>This is body</h3>
                <h3>This is body</h3> */}

                <h5>
                    Linear programming is a special case of mathematical
                    programming (also known as mathematical optimization). More
                    formally, linear programming is a technique for the
                    optimization of a linear objective function, subject to
                    linear equality and linear inequality constraints. Its
                    feasible region is a convex polytope, which is a set defined
                    as the intersection of finitely many half spaces, each of
                    which is defined by a linear inequality. Its objective
                    function is a real-valued affine (linear) function defined
                    on this polyhedron. A linear programming algorithm finds a
                    point in the polytope where this function has the smallest
                    (or largest) value if such a point exists.
                </h5>
            </div>
            {/***********===============*****Post Body Ends**********************====================********************* */}
            <div className={styles.emojiColor}>
                <Row>
                    <Col lg={4} sm={3}>
                        {/*🎯 */}
                        <OverlayTrigger
                            placement={"top"}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <div className={styles.authorDetails}>
                                        {/* <FaRegSmileBeam /> */}
                                        <Button className={styles.likeButton}>
                                            <FaRegSmileBeam
                                                className={styles.sendMoneyIcon}
                                            />
                                        </Button>
                                        <Button className={styles.likeButton}>
                                            <FaRegSmile
                                                className={styles.sendMoneyIcon}
                                            />
                                        </Button>
                                    </div>
                                    {/* Send <strong>Money</strong> to creator. */}
                                </Tooltip>
                            }
                        >
                            <Button className={styles.likeButton}>
                                <BiLike className={styles.sendMoneyIcon} />
                            </Button>
                        </OverlayTrigger>
                        {/* <Button className={styles.likeButton}>
                            <BiLike className={styles.sendMoneyIcon} />
                        </Button> */}
                        <Button className={styles.likeButton}>
                            <BiDislike className={styles.sendMoneyIcon} />
                        </Button>

                        {/* <AiTwotoneLike />
                        <AiTwotoneDislike /> */}

                        {/* <FaRegSmileBeam />
                        <FaRegSmile />
                        <FaRegSadTear /> */}

                        {/* <FaRegLaugh /> */}
                        {/*🎯 For Send Money */}
                        <OverlayTrigger
                            placement={"bottom"}
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Send <strong>Money</strong> to creator.
                                </Tooltip>
                            }
                        >
                            <Button className={styles.sendMoneyButton}>
                                <GiSelfLove className={styles.sendMoneyIcon} />
                            </Button>
                        </OverlayTrigger>
                        {/*🎯 add this content to a folder */}
                        <OverlayTrigger
                            placement={"bottom"}
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Send <strong>Money</strong> to creator.
                                </Tooltip>
                            }
                        >
                            <Button className={styles.sendMoneyButton}>
                                <FcOpenedFolder
                                    className={styles.sendMoneyIcon}
                                />
                            </Button>
                        </OverlayTrigger>
                    </Col>
                    <Col lg={7} sm={9} className={styles.commentBox}>
                        {/*🎯 Comment Form */}
                        <CommentForm />
                    </Col>
                </Row>
            </div>
        </div>
    );
}
