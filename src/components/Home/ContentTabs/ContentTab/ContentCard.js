import React, { useEffect, useRef, useState } from "react";
import {
    Breadcrumb,
    Button,
    Card,
    Col,
    OverlayTrigger,
    Row,
    Tooltip,
} from "react-bootstrap";
import styles from "./ContentCard.module.css";
import image1 from "../../../../images/Home/UserProfilePicture/photo4.jpg";
import { FaRegStarHalf, FaRoute, FaStar, FaStarHalf } from "react-icons/fa";
import {
    BsBookmarkCheck,
    BsFillCheckCircleFill,
    BsStarHalf,
    BsThreeDots,
} from "react-icons/bs";
import {
    IoNavigateCircleOutline,
    IoNavigateCircleSharp,
    IoSchool,
} from "react-icons/io5";

import { AiOutlineCloseCircle, AiFillCloseCircle } from "react-icons/ai";

import { Alert } from "bootstrap";
import { BiDislike, BiLike } from "react-icons/bi";

// ekhane ekhon amader hook ta create korte hobe .. jeta pore amra Hook er folder e
// https://www.youtube.com/watch?v=eWO1b6EoCnQ&ab_channel=RyanToronto kaj kore nai ...
// niye jabo .. shekhan theke hook ta ei file e call korbo

let useClickOnUsersNameToViewDetails = (handler) => {
    // is going to be an anonymous function ..that does all the staff ..
    // our useClickOnUsersNameToViewDetails .. it takes something to do .. it takes a
    // function to run when the user clicks outside ..so, im gonna call this 😀handler

    let domNodeRef = useRef(); // ekta ref jehetu return kore ..

    // amra amader useEffect ta shei hook er moddhe niye jabo
    useEffect(() => {
        let maybeHandler = (event) => {
            if (!domNodeRef.current.contains(event.target)) {
                // now we need to deal with the passed in handler ..
                // and the way that maybe handler is gonna work ..is .. its gonna check
                // to make sure that the event is outside of the DOM node..and if it is ..
                // well .. its gonna run the passed in handler ..
                /// setIsOpenUsersDetails(false); // jokhon eta function er moddhe chilo
                handler();
            }
        };

        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    }, []);

    // and it also returns a ref ..
    return domNodeRef;
};

export default function ContentTab({ contentStatus }) {
    const [isOpenUsersDetails, setIsOpenUsersDetails] = useState(false);
    const [isOpenContentPathShow, setIsOpenContentPathShow] = useState(false);
    const toggleModal = () => {
        // button e click korle state ta toggle korte chai ..
        setIsOpenUsersDetails(!isOpenUsersDetails); // true thakle false hobe .. false thakle true
    };

    const toggleContentPathShow = () => {
        setIsOpenContentPathShow(!isOpenContentPathShow);
    };

    // we need a ref here to attach to a DOM node .. so amra amader hook ta return korbe ekta ref .. or
    // returning a DOM node to attach to the thing that you want to click outside of
    let domNode = useClickOnUsersNameToViewDetails(() => {
        setIsOpenUsersDetails(false); // normally close thake ...
    }); // ei hook ta ekta function ney jeta run kore
    return (
        <div className={styles.main}>
            <img src={image1} alt="" height="170px" width="250px" />
            <button className={styles.threeDotsButton}>
                <BsThreeDots className={styles.threeDotsButtonIcon} />
            </button>
            <h3 className={styles.contentName}>
                বাংলাদেশ ও বিশ্বপরিচয়, সমসাময়িক বাংলাদেশ ও মুক্তিযুদ্ধের পট
                পরিবর্তন,
            </h3>
            {/* <OverlayTrigger
                placement={"top"}
                overlay={
                    <Tooltip id={`tooltip-top`}>
                        <div className={styles.authorDetails}>
                            <strong>
                                Show Something that relative to Post Creator
                            </strong>
                        </div>
                    </Tooltip>
                }
            >
                <h4 className={styles.authorName} onDoubleClick={toggleModal}>
                    Mohammad Bin Ab. Jalil Sheakh
                    <span className={styles.blueTikMark}>
                        <BsFillCheckCircleFill />
                    </span>
                </h4>
            </OverlayTrigger> */}
            <h4 className={styles.authorName} onDoubleClick={toggleModal}>
                Mohammad Bin Ab. Jalil Sheakh
                <span className={styles.blueTikMark}>
                    <BsFillCheckCircleFill />
                </span>
            </h4>
            {/* userName e hover korle ei div ta show korbe arki  */}
            {/* {isOpenUsersDetails && (
                <div ref={domNode} className={styles.userDetails}>
                    <button onClick={toggleModal}>Close</button>
                </div>
            )} */}
            <div className={styles.ratingAndTagBlock}>
                <h4 className={styles.contentRating}>
                    Class:{" "}
                    <span className={styles.classNdInstitution}> 10</span>
                </h4>
                <h6 className={styles.contentRating}>
                    <IoSchool className={styles.institutionIcon} /> :
                    <span className={styles.classNdInstitution}>AIUB</span>
                </h6>
            </div>

            <div className={styles.ratingAndTagBlock}>
                <h4 className={styles.contentRating}>rating: 3.7</h4>
                {contentStatus === "free" ? (
                    <h6 className={styles.freeTag}>Free</h6>
                ) : (
                    <h6 className={styles.paidTag}>Paid</h6>
                )}
            </div>
            {/* {isOpenContentPathShow && (
                <div ref={domNode} className={styles.pathDetails}>
                    <Breadcrumb>
                        <>
                            <Breadcrumb.Item
                                // hover korle active class remove hobe
                                // active
                                className={styles.breadcrumbStyle}
                                href="#"
                            >
                                CSE
                            </Breadcrumb.Item>
                            <Breadcrumb.Item
                                // active
                                className={styles.breadcrumbStyle}
                                href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
                            >
                                Database Management
                            </Breadcrumb.Item>
                            <Breadcrumb.Item
                                // active
                                className={styles.breadcrumbStyle}
                                href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
                            >
                                ER Diagram
                            </Breadcrumb.Item>
                        </>
                    </Breadcrumb>

                    <Button
                        onClick={toggleContentPathShow}
                        className={styles.pathDetailsCloseButton}
                    >
                        <AiOutlineCloseCircle
                            className={styles.pathDetailsCloseIcon}
                        />
                    </Button>
                </div>
            )} */}

            {isOpenUsersDetails && (
                <div ref={domNode} className={styles.pathDetails}>
                    <Breadcrumb>
                        <>
                            <Breadcrumb.Item
                                // hover korle active class remove hobe
                                // active
                                className={styles.breadcrumbStyle}
                                href="#"
                            >
                                CSE
                            </Breadcrumb.Item>
                            <Breadcrumb.Item
                                // active
                                className={styles.breadcrumbStyle}
                                href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
                            >
                                Database Management
                            </Breadcrumb.Item>
                            <Breadcrumb.Item
                                // active
                                className={styles.breadcrumbStyle}
                                href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
                            >
                                ER Diagram
                            </Breadcrumb.Item>
                        </>
                    </Breadcrumb>

                    <Button
                        // onClick={toggleContentPathShow}
                        onClick={toggleModal}
                        className={styles.pathDetailsCloseButton}
                    >
                        <AiOutlineCloseCircle
                            className={styles.pathDetailsCloseIcon}
                        />
                    </Button>
                </div>
            )}
            <Row className={styles.buttonRow}>
                <Col lg={7} md={7} sm={7} xs={7}>
                    <div className={styles.buttonBlock}>
                        <Button className={styles.addToLibraryButton}>
                            <BiLike className={styles.addToLibraryIcon} />
                        </Button>
                        <Button className={styles.addToLibraryButton}>
                            <BiDislike className={styles.addToLibraryIcon} />
                        </Button>
                    </div>
                </Col>
                <Col lg={5} md={5} sm={5} xs={5}>
                    <div className={styles.buttonBlock}>
                        <Button className={styles.addToLibraryButton}>
                            <BsBookmarkCheck
                                className={styles.addToLibraryIcon}
                            />
                        </Button>
                        <Button
                            // onClick={toggleContentPathShow}
                            onClick={toggleModal}
                            className={styles.addToLibraryButton}
                        >
                            {/* IoNavigateCircleSharp */}

                            <IoNavigateCircleOutline
                                className={styles.goToPathIcon}
                            />
                            {/*FaRoute  */}
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
