import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./SingleForm.module.css";
import { FcSearch } from "react-icons/fc";

export default function SingleForm() {
    useEffect(() => {
        handleFocus();
    });
    const searchInput = useRef(null);

    function handleFocus() {
        searchInput.current.focus();
    }
    const [showSearchBar, setShowSearchBar] = useState("none");

    const handleSearchBar = () => {
        if (showSearchBar === "none") {
            setShowSearchBar("block");
        } else {
            setShowSearchBar("none");
        }
    };

    return (
        <div>
            <div
                className={styles.formContainer}
                style={{ display: showSearchBar }}
            >
                <Form className={styles.form}>
                    {/* /Removed form group as it is unnecessary when using single form item./ */}

                    <Form.Control
                        className={styles.searchBar}
                        ref={searchInput}
                        type="search"
                        placeholder={"Search Here..."}
                    />

                    <Button
                        className={styles.button}
                        variant="primary"
                        type="submit"
                    >
                        <span className={styles.searchIcon}>
                            <i class="fas fa-search "></i>
                        </span>
                        Search
                    </Button>
                </Form>
            </div>

            <button onClick={handleSearchBar} className={styles.searchBtn}>
                <FcSearch className={styles.searchBtnIcon} />
            </button>
            {/* {viewSearchIcon && (
                <Button
                    onClick={handleFocus}
                    className={styles.button2}
                    variant="primary"
                >
                    <span className={styles.searchIcon}>
                        <i class="fas fa-search "></i>
                    </span>
                </Button>
            )} */}
        </div>
    );
}
