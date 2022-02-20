import React from "react";
import styles from "./Authentication.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Image from "../../images/Common/Navbar/1.png";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Chips from "react-chips/lib/Chips";
import { FcGoogle } from "react-icons/fc";

import { FaFacebook } from "react-icons/fa";
function useQuery() {
    return new URLSearchParams(useLocation().search);
    // that simply allow us to use it as a hook...
}
export default function Authentication() {
    const query = useQuery();
    const searchQuery = query.get("formType");
    console.log(searchQuery);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // setPostData2(postData);
    };
    return (
        <>
            <div className={styles.AuthenticationPage}>
                <div className={styles.AuthenticationForm}>
                    <div className={styles.left}>
                        <img className={styles.image} src={Image} alt="" />
                    </div>
                    <div className={styles.right}>
                        {/* ===================================User Sign In====================================== */}
                        {searchQuery === "UserSignIn" && (
                            <div className={styles.NewPostForm}>
                                <div className={styles.title}>
                                    <h1>Sign in</h1>
                                </div>

                                <Form
                                    autoComplete="off"
                                    nonValidate
                                    onSubmit={handleSubmit}
                                >
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email or Phone Number"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="text"
                                            placeholder="Write your Title.."
                                            name="contentTitle"
                                            // value={postData.contentTitle} // store in the state // name of the state is postData
                                            // onChange={(e) =>
                                            //     setPostData({
                                            //         ...postData,
                                            //         contentTitle: e.target.value,
                                            //     })
                                            // }
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Password"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="password"
                                            type="text"
                                            placeholder="Write your Title.."
                                            name="contentTitle"
                                            // value={postData.contentTitle} // store in the state // name of the state is postData
                                            // onChange={(e) =>
                                            //     setPostData({
                                            //         ...postData,
                                            //         contentTitle: e.target.value,
                                            //     })
                                            // }
                                        />
                                    </FloatingLabel>
                                    <Button
                                        className={styles.submitBtn}
                                        variant="primary"
                                        type="submit"
                                    >
                                        Sign In
                                    </Button>
                                    {/* </******************************************************************** */}
                                    <h6 className={styles.fileUploadLabel}>
                                        Or Sign in with
                                    </h6>
                                    <div
                                        className={
                                            styles.googleFacebookBtnGroup
                                        }
                                    >
                                        <button
                                            className={styles.googleFacebookBtn}
                                            // onClick={}
                                        >
                                            <span>
                                                <FcGoogle />
                                            </span>{" "}
                                            Google
                                        </button>

                                        {/* ====================================Select Course===================================== */}

                                        <button
                                            className={styles.googleFacebookBtn}
                                        >
                                            <span>
                                                <FaFacebook
                                                    className={
                                                        styles.FacebookIconColor
                                                    }
                                                />
                                            </span>{" "}
                                            Facebook
                                        </button>
                                    </div>

                                    {/* /******************************** */}
                                </Form>
                                <h6>
                                    have an account ?{" "}
                                    <span>
                                        <Link
                                            className={
                                                styles.signInBtnForSignUpForm
                                            }
                                            to="/auth/UserSignUp"
                                        >
                                            Sign up
                                        </Link>
                                    </span>{" "}
                                    in stead
                                </h6>
                                <h6>
                                    Forget your password ?{" "}
                                    <span>
                                        <Link
                                            className={
                                                styles.signInBtnForSignUpForm
                                            }
                                            to="/auth/recovery"
                                        >
                                            Recover Here
                                        </Link>
                                    </span>
                                </h6>
                            </div>
                        )}
                        {/* ===================================Admin  Sign In====================================== */}
                        {searchQuery === "AdminSignIn" && (
                            <div className={styles.NewPostForm}>
                                <div className={styles.title}>
                                    <h1>Admin Sign in</h1>
                                </div>

                                <Form
                                    autoComplete="off"
                                    nonValidate
                                    onSubmit={handleSubmit}
                                >
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Admin Id"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            // type="text"
                                            placeholder="Write your Title.."
                                            type="text"
                                            name="contentTitle"
                                            // value={postData.contentTitle} // store in the state // name of the state is postData
                                            // onChange={(e) =>
                                            //     setPostData({
                                            //         ...postData,
                                            //         contentTitle: e.target.value,
                                            //     })
                                            // }
                                        />
                                    </FloatingLabel>

                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Secret Code"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="text"
                                            // type="password"
                                            placeholder="Write your Title.."
                                            name="contentTitle"
                                            // value={postData.contentTitle} // store in the state // name of the state is postData
                                            // onChange={(e) =>
                                            //     setPostData({
                                            //         ...postData,
                                            //         contentTitle: e.target.value,
                                            //     })
                                            // }
                                        />
                                    </FloatingLabel>

                                    <Button variant="primary" type="submit">
                                        Sign in
                                    </Button>
                                </Form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
