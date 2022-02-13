import React, { useEffect, useState } from "react";
import {
    Button,
    Col,
    Container,
    Form,
    FormControl,
    Image,
    Nav,
    Navbar,
    NavDropdown,
    Row,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import styles from "./UsersNavbar.module.css";
export default function UsersNavbar() {
    // const [scrolled, setScrolled] = React.useState(false);

    // const handleScroll = () => {
    //     const offset = window.scrollY;
    //     if (offset > 200) {
    //         setScrolled(true);
    //     } else {
    //         setScrolled(false);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    // let x = ["navbar"];
    // if (scrolled) {
    //     x.push("scrolled");
    // }

    return (
        <Row className={styles.UsersNavbar}>
            {/* <Col lg={12}> */}
            <Navbar
                collapseOnSelect
                expand="lg"
                // bg="dark"
                variant="dark"
                // variant="light"
                // sticky="top"
                className={styles.navColor}
            >
                <Container>
                    <Navbar.Brand as={Link} to="/home"></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Row>
                            <Col lg={6}></Col>
                            <Col lg={6}>
                                <Nav className="me-auto">
                                    {/* <Nav.Link className={styles.nlink} as={Link} to="/">
                                বারাকা
                            </Nav.Link> */}
                                    <Nav.Link
                                        className={styles.nlink}
                                        as={Link}
                                        to="/user/:id"
                                    >
                                        Profile
                                    </Nav.Link>
                                    <Nav.Link
                                        className={styles.nlink}
                                        as={Link}
                                        to="/user/:id/about"
                                    >
                                        About
                                    </Nav.Link>
                                    <Nav.Link
                                        className={styles.nlink}
                                        as={Link}
                                        to="/user/:id/about"
                                    >
                                        Gallery
                                    </Nav.Link>

                                    <Nav.Link
                                        className={styles.nlink}
                                        as={Link}
                                        to="/user/:id/notes"
                                    >
                                        Notes
                                    </Nav.Link>
                                    <Nav.Link
                                        className={styles.nlink}
                                        as={Link}
                                        to="/user/:id/tutorials"
                                    >
                                        Tutorials
                                    </Nav.Link>
                                    <Nav.Link
                                        className={styles.nlink}
                                        as={Link}
                                        to="/user/:id/mentorship"
                                    >
                                        Mentorship
                                    </Nav.Link>
                                    <Nav.Link
                                        className={styles.nlink}
                                        as={Link}
                                        to="/user/:id/sendMoney"
                                    >
                                        SendMoney
                                    </Nav.Link>
                                    <Nav.Link
                                        className={styles.nlink}
                                        as={Link}
                                        to="/user/:id/balance"
                                    >
                                        Balance
                                    </Nav.Link>
                                    <Nav.Link
                                        className={styles.nlink}
                                        as={Link}
                                        to="/user/:id/features"
                                    >
                                        Feature
                                    </Nav.Link>

                                    {/* ----------------------- 1st Dropdown----------------------------------- */}
                                    {/* <NavDropdown
                                        title="কাস্টমাইজেশন "
                                        id="collasible-nav-dropdown"
                                    >
                                        <NavDropdown.Item to="#action/3.1">
                                            ভাষা
                                        </NavDropdown.Item>
                                        <NavDropdown.Item to="#action/3.2">
                                            ডার্কমুড
                                        </NavDropdown.Item>
                                    </NavDropdown> */}
                                </Nav>
                            </Col>
                        </Row>

                        {/* <Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">
                                    Search
                                </Button>
                            </Form>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* </Col> */}
        </Row>
    );
}
