import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./CommentForm.module.css";
import { AiFillFolderAdd, AiFillRightCircle } from "react-icons/ai";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function CommentForm() {
    const searchInput = useRef(null);
    function handleFocus() {
        searchInput.current.focus();
    }
    return (
        <div>
            <Form className={styles.form}>
                {/* /Removed form group as it is unnecessary when using single form item./ */}

                <Form.Control
                    className={styles.searchBar}
                    ref={searchInput}
                    type="search"
                    placeholder="Write a comment... "
                />

                {/* <Button
                    className={styles.mainSearchButton}
                    variant="primary"
                    type="submit"
                >
                    <span className={styles.mainSearchIcon}>
                        <i>
                            <AiFillRightCircle />{" "}
                        </i>
                    </span>
                    Search
                </Button> */}

                <OverlayTrigger
                    placement={"bottom"}
                    overlay={
                        <Tooltip id={`tooltip-bottom`}>
                            Post <strong>Comment</strong> to this Post.
                        </Tooltip>
                    }
                >
                    <Button
                        className={styles.mainSearchButton}
                        variant="primary"
                        type="submit"
                    >
                        <span className={styles.mainSearchIcon}>
                            <i>
                                <AiFillRightCircle />{" "}
                            </i>
                        </span>
                    </Button>
                </OverlayTrigger>
                <Button className={styles.addFolderButton}>
                    <AiFillFolderAdd className={styles.addFolderButtonIcon} />
                </Button>
            </Form>
        </div>
    );
}
