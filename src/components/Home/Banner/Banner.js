import React, { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import { FcSearch } from "react-icons/fc";
import best1 from "../../../images/Common/Navbar/1.png";
import best3 from "../../../images/Common/Navbar/3.png";
import SingleForm from "../../Common/SingleForm/SingleForm";
import styles from "./Banner.module.css";

export default function Banner({ searchVisible }) {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={best3}
                        alt="First slide"
                    />
                    {/* <Image width="50" height="50" src={best1} /> */}
                    <Carousel.Caption className={styles.textColor}>
                        <h5>First slide label</h5>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={best3}
                        alt="First slide"
                    />
                    {/* <Image width="50" height="50" src={best1} /> */}
                    <Carousel.Caption className={styles.textColor}>
                        <h5>Second slide label</h5>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={best3}
                        alt="First slide"
                    />
                    {/* <Image width="50" height="50" src={best1} /> */}
                    <Carousel.Caption className={styles.textColor}>
                        <h5>Third slide label</h5>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {searchVisible && (
                <div className={styles.searchContainer}>
                    <SingleForm viewSearchIcon="false" />
                </div>
            )}
        </>
    );
}
