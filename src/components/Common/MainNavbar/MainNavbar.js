import React, { useState, useEffect } from "react";
import {
    Breadcrumb,
    Button,
    Container,
    Dropdown,
    Form,
    FormControl,
    // Image,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./MainNavbar.module.css";
import SubjectCategory from "./SubjectCategory";
import best1 from "../../../images/Common/Navbar/2.png";
import Marquee from "../../Home/Marquee/Marquee";
import { FcSearch, FcSms } from "react-icons/fc";
import Banner from "../../Home/Banner/Banner";
import {
    AiFillNotification,
    AiOutlineCloseCircle,
    AiOutlineNotification,
    AiTwotoneNotification,
} from "react-icons/ai";
import { useRef } from "react";
import HomeNotifications from "../../UsersHome/HomeNotifications/HomeNotifications";
import OnlineFriends from "../../UsersHome/OnlineFriends/OnlineFriends";
import Messages from "../../UsersHome/Messages/Messages";

let useClickOnUsersNameToViewDetails = (handler) => {
    // is going to be an anonymous function ..that does all the staff ..
    // our useClickOnUsersNameToViewDetails .. it takes something to do .. it takes a
    // function to run when the user clicks outside ..so, im gonna call this 😀handler

    let domNodeRef = useRef(); // ekta ref jehetu return kore ..

    // amra amader useEffect ta shei hook er moddhe niye jabo
    useEffect(() => {
        let maybeHandler = (event) => {
            if (!domNodeRef.current?.contains(event.target)) {
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
    });

    // and it also returns a ref ..
    return domNodeRef;
};

let useClickOnOutsideToHideNotification = (handler) => {
    // is going to be an anonymous function ..that does all the staff ..
    // our useClickOnUsersNameToViewDetails .. it takes something to do .. it takes a
    // function to run when the user clicks outside ..so, im gonna call this 😀handler

    let domNodeRef1 = useRef(); // ekta ref jehetu return kore ..

    // amra amader useEffect ta shei hook er moddhe niye jabo
    useEffect(() => {
        let maybeHandler = (event) => {
            if (!domNodeRef1.current?.contains(event.target)) {
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
    });

    // and it also returns a ref ..
    return domNodeRef1;
};
export default function MainNavbar() {
    const user = JSON.parse(localStorage.getItem("LessonInsiderUserProfile"));
    const [isOpenNotification, setIsOpenNotification] = useState(false);
    const [isOpenMessages, setIsOpenMessages] = useState(false);
    // state for hide show icon button
    const [showMessageIcon, setShowMessageIcon] = useState(true);
    const [showNotificationIcon, setNotificationIcon] = useState(true);
    // useEffect = () => ({
    //     Window.addEventListener("scroll", this.onScroll);

    // }, []);

    const toggleNotificationsModal = () => {
        // button e click korle state ta toggle korte chai ..
        setIsOpenMessages(false);
        setIsOpenNotification(!isOpenNotification); // true thakle false hobe .. false thakle true
    };
    const toggleMessagesModal = () => {
        // button e click korle state ta toggle korte chai ..
        setIsOpenNotification(false);
        setIsOpenMessages(!isOpenMessages); // true thakle false hobe .. false thakle true
    };
    const toggoleMessageIcon = () => {
        setShowMessageIcon(!showMessageIcon);
    };
    // we need a ref here to attach to a DOM node .. so amra amader hook ta return korbe ekta ref .. or
    // returning a DOM node to attach to the thing that you want to click outside of
    let domNodeForMessage = useClickOnUsersNameToViewDetails(() => {
        // normally close thake ...
        setIsOpenMessages(false);
    }); // ei hook ta ekta function ney jeta run kore
    let domNodeForNotification = useClickOnOutsideToHideNotification(() => {
        setIsOpenNotification(false); // normally close thake ...
    }); // ei hook ta ekta function ney jeta run kore
    return (
        <>
            <Marquee />
            <Navbar
                collapseOnSelect
                expand="lg"
                // bg="dark"
                variant="dark"
                // variant="light"
                sticky="top"
                className={styles.navColor}
            >
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img src={best1} height="51" width="240"></img>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link className={styles.nlink} as={Link} to="/">
                                বারাকা
                            </Nav.Link> */}
                            <Nav.Link
                                className={styles.nlink}
                                as={Link}
                                to="/user/home"
                            >
                                Home
                            </Nav.Link>

                            {/* ----------------------- 1st Dropdown----------------------------------- */}
                            <SubjectCategory />
                            <Nav.Link
                                className={styles.nlink}
                                as={Link}
                                to="/notes"
                            >
                                Notes
                            </Nav.Link>
                            <Nav.Link
                                className={styles.nlink}
                                as={Link}
                                to="/tutorials"
                            >
                                Tutorials
                            </Nav.Link>
                            <Nav.Link
                                className={styles.nlink}
                                as={Link}
                                to="/mentorship"
                            >
                                Mentorship
                            </Nav.Link>
                            <Nav.Link
                                className={styles.nlink}
                                as={Link}
                                to="/discussion"
                            >
                                Discussion
                            </Nav.Link>
                            <Nav.Link
                                className={styles.nlink}
                                as={Link}
                                to="/feature"
                            >
                                Feature
                            </Nav.Link>

                            {/* ----------------------- 2nd Dropdown----------------------------------- */}
                            <NavDropdown
                                title="কাস্টমাইজেশন "
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item to="#action/3.1">
                                    ভাষা
                                </NavDropdown.Item>
                                <NavDropdown.Item to="#action/3.2">
                                    ডার্কমুড
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {/* ----------------------- 3rd Dropdown----------------------------------- */}
                            {user && (
                                <Nav.Link
                                    className={styles.nlinkIcon}
                                    onClick={toggleMessagesModal}
                                >
                                    <FcSms className={styles.navIcon} />
                                    {/* Message Number */}5
                                </Nav.Link>
                            )}

                            {isOpenMessages && (
                                <div
                                    ref={domNodeForMessage}
                                    className={styles.ModalsBody}
                                >
                                    <Messages />
                                    <Nav.Link
                                        className={styles.nlinkIcon}
                                        onClick={toggleMessagesModal}
                                        className={styles.messageCloseButton}
                                    >
                                        <FcSms className={styles.navIcon} />
                                        {/* Message Number */}
                                    </Nav.Link>
                                </div>
                            )}
                            {user && (
                                <Nav.Link
                                    className={styles.nlinkIcon}
                                    onClick={toggleNotificationsModal}
                                >
                                    <AiTwotoneNotification
                                        className={styles.navIcon}
                                    />
                                    {/* Notification Number */}
                                    19
                                </Nav.Link>
                            )}

                            {isOpenNotification && (
                                <div
                                    ref={domNodeForNotification}
                                    className={styles.ModalsBody}
                                >
                                    <HomeNotifications />
                                    <Nav.Link
                                        className={
                                            styles.notificationCloseButton
                                        }
                                        onClick={toggleNotificationsModal}
                                    >
                                        <AiTwotoneNotification
                                            className={styles.navIcon}
                                        />
                                        {/* Notification Number */}
                                    </Nav.Link>
                                </div>
                            )}
                            {user && (
                                <Nav.Link
                                    className={styles.nlink}
                                    as={Link}
                                    to="/user/:id"
                                >
                                    Profile
                                </Nav.Link>
                            )}
                            {!user && (
                                <NavDropdown
                                    title="লগ ইন করুন "
                                    id="collasible-nav-dropdown"
                                >
                                    <NavDropdown.Item
                                        as={Link}
                                        to="/auth/?formType=UserSignIn"
                                    >
                                        ইউজার
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        to="/auth/?formType=AdminSignIn"
                                    >
                                        এডমিন
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        to="/auth/UserSignUp"
                                    >
                                        সাইন আপ করুন
                                    </NavDropdown.Item>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                {/* <FcSearch
                    onclick={() => setSearchVisible(!searchVisible)}
                    onmouseover={handleMouseCursor}
                /> */}
            </div>
        </>
    );
}
