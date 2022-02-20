import React, { useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import styles from "./SignUpForm.module.css";
import ReactChipInput from "react-chip-input"; /** eta use korte parleo may be valo hoito .. sure na  */
import { FaTag } from "react-icons/fa";
import FileBase64 from "react-file-base64";
import Chips from "react-chips/lib/Chips";
import { AiFillCloseCircle, AiFillCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function SignUpForm({ handleCloseModalButton }) {
    const [signUpFormData, setSignUpFormData] = useState({
        // kon class e pore .. school, College, University egula mention korte hobe ..
        // job korle kothay job kore .. sheta bolte hobe ..
        email: "",
        phoneNumber: "",
        fullName: "",

        district: "",
        userRole: "",
        institutionName: "",
        institutionId: "",
        selectedProfilePictureFile: [], // we are going to convert an image into base-64-image .. just in a second ..
        password: "",
    }); // initially empty object ...

    const [postData2, setPostData2] = useState({
        email: "",
        phoneNumber: "",
        fullName: "",

        nationality: "",
        userRole: "",
        institutionName: "",
        institutionId: "",
        selectedProfilePictureFile: [], // we are going to convert an image into base-64-image .. just in a second ..
        password: "",
    });

    const onChipsChange = (chip) => {
        // setPostData((prevState) => ({
        //     chips: chip,
        // }));
        setSignUpFormData((prevState) => ({
            ...prevState,
        }));

        setSignUpFormData(() => ({
            chips: chip,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPostData2(signUpFormData);
    };

    console.log("❤❤❤❤ Post Data 2 : ", postData2);
    return (
        <div className={styles.NewPostForm}>
            <div className={styles.title}>
                <h1>Sign up..</h1>
                <Button
                    onClick={handleCloseModalButton}
                    className={styles.closeBtn}
                >
                    <AiFillCloseSquare className={styles.closeBtnIcon} />
                    {/* <AiFillCloseCircle /> */}
                </Button>
            </div>

            <Form autoComplete="off" nonValidate onSubmit={handleSubmit}>
                {/* ----------------------------Email---------------------- */}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control
                        // type="text"
                        type="email"
                        placeholder="Write your Title.."
                        name="email"
                        value={signUpFormData.email} // store in the state // name of the state is postData
                        onChange={(e) =>
                            setSignUpFormData({
                                ...signUpFormData,
                                email: e.target.value,
                            })
                        }
                    />
                </FloatingLabel>
                {/* ----------------------------Phone Number---------------------- */}
                {/* ----------------------------FullName---------------------- */}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Full Name"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="Write your FullName.."
                        name="fullName"
                        value={signUpFormData.fullName} // store in the state // name of the state is postData
                        onChange={(e) =>
                            setSignUpFormData({
                                ...signUpFormData,
                                fullName: e.target.value,
                            })
                        }
                    />
                </FloatingLabel>

                {/* ----------------------------Nationality---------------------- */}
                {/* ----------- Select korar Option Thakte pare .. jekhane
                Bangladesh Select korai thakbe .. manush chaile Onno Country
                Select korte parbe ... and obosshoi district select korar Option
                Thakbe----------- */}
                <FloatingLabel
                    controlId="floatingInput"
                    label="District "
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="Write your District.."
                        name="district"
                        value={signUpFormData.district} // store in the state // name of the state is postData
                        onChange={(e) =>
                            setSignUpFormData({
                                ...signUpFormData,
                                district: e.target.value,
                            })
                        }
                    />
                </FloatingLabel>
                {/* ----------------------------User Role---------------------- */}
                {/* ================User Role Select korar Option Thakbe=================  */}
                {/* ----------------------------Current Institution Name---------------------- */}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Current Institution Name "
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="Write your Current Institution Name.."
                        name="institutionName"
                        value={signUpFormData.institutionName} // store in the state // name of the state is postData
                        onChange={(e) =>
                            setSignUpFormData({
                                ...signUpFormData,
                                institutionName: e.target.value,
                            })
                        }
                    />
                </FloatingLabel>
                {/* ----------------------------Current Institution Roll / Id Number---------------------- */}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Current Institution Roll / ID "
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="Write your Current Institution Roll / ID.."
                        name="institutionId"
                        value={signUpFormData.institutionId} // store in the state // name of the state is postData
                        onChange={(e) =>
                            setSignUpFormData({
                                ...signUpFormData,
                                institutionId: e.target.value,
                            })
                        }
                    />
                </FloatingLabel>
                {/* ----------------------------Profile Picture---------------------- */}
                {/* -------- File Upload Korar Option Thakbe ---------- */}
                {/* ----------------------------Student/ Teacher Id card Upload korar bebostha Thakbe---------------------- */}
                {/* ----------------------------Password---------------------- */}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Password"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="Write your Password.."
                        name="password"
                        value={signUpFormData.password} // store in the state // name of the state is postData
                        onChange={(e) =>
                            setSignUpFormData({
                                ...signUpFormData,
                                password: e.target.value,
                            })
                        }
                    />
                </FloatingLabel>
                {/* ----------------------------------------- Done ----------------------------------------- */}
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check
                        type="checkbox"
                        label="I read all terms and condition"
                    />
                </Form.Group>
                <Button
                    className={styles.createAccountBtn}
                    variant="primary"
                    type="submit"
                >
                    Create Account
                </Button>
            </Form>
            <h7>
                already have an account ?{" "}
                <span>
                    <Link
                        className={styles.signInBtnForSignUpForm}
                        to="/auth/?formType=UserSignIn"
                    >
                        Sign in
                    </Link>
                </span>{" "}
                in stead
            </h7>
        </div>
    );
}
