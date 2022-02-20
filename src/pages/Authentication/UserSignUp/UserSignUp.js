import React from "react";
import styles from "./UserSignUp.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Image from "../../../images/Common/Navbar/1.png";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Chips from "react-chips/lib/Chips";
import { FcGoogle } from "react-icons/fc";

import { FaFacebook } from "react-icons/fa";
import UserSignUpFormModal from "./UserSignUpFormModal/UserSignUpFormModal";
function useQuery() {
    return new URLSearchParams(useLocation().search);
    // that simply allow us to use it as a hook...
}
export default function UserSignUp() {
    const query = useQuery();
    const searchQuery = query.get("formType");
    console.log(searchQuery);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // setPostData2(postData);
    };
    return (
        <div className={styles.AuthenticationPage}>
            <div className={styles.AuthenticationForm}>
                <img className={styles.image} src={Image} alt="" />
                <UserSignUpFormModal />
            </div>
        </div>
    );
}
