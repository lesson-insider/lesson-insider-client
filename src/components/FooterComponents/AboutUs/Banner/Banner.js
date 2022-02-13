import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { FcSearch } from "react-icons/fc";

import img1 from "../../../../images/AboutUs/1.jpg";
import img2 from "../../../../images/AboutUs/2.png";
import img3 from "../../../../images/AboutUs/3.png";

import styles from "./Banner.module.css";

export default function Banner({ searchVisible }) {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        // className="d-block w-100"
                        className={styles.coverphoto}
                        src={img1}
                        alt="First slide"
                    />
                    {/* <Image width="50" height="50" src={best1} /> */}
                    <Carousel.Caption className={styles.textColor}>
                        <h5>1</h5>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        // className="d-block w-100"
                        className={styles.coverphoto}
                        src={img2}
                        alt="First slide"
                    />
                    {/* <Image width="50" height="50" src={best1} /> */}
                    <Carousel.Caption className={styles.textColor}>
                        <h5>2</h5>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        // className="d-block w-100"
                        className={styles.coverphoto}
                        src={img3}
                        alt="First slide"
                    />
                    {/* <Image width="50" height="50" src={best1} /> */}
                    <Carousel.Caption className={styles.textColor}>
                        <h5>3</h5>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* {searchVisible && <SingleForm />} */}
        </>
    );
}
