import React from "react";
import { ListGroup, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Option.module.css";

export default function Option({ optionName, direction }) {
    return (
        <div className={styles.option} as={Link} to={direction}>
            {optionName}
        </div>
    );
}
