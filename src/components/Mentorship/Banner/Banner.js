import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { FcSearch } from "react-icons/fc";
import best1 from "../../../images/Common/Navbar/3.png";
import img2 from "../../../images/Mentorship/CarouselPicture/2.jpg";
import img3 from "../../../images/Mentorship/CarouselPicture/3.jpg";
import img4 from "../../../images/Mentorship/CarouselPicture/4.jpg";
import img5 from "../../../images/Mentorship/CarouselPicture/5.png";
import img6 from "../../../images/Mentorship/CarouselPicture/6.jpg";
import img7 from "../../../images/Mentorship/CarouselPicture/7.jpg";
import img8 from "../../../images/Mentorship/CarouselPicture/8.jpg";
import img9 from "../../../images/Mentorship/CarouselPicture/9.jpeg";
import img10 from "../../../images/Mentorship/CarouselPicture/10.png";
import img11 from "../../../images/Mentorship/CarouselPicture/11.jpg";

import SingleForm from "../../Common/SingleForm/SingleForm";
import styles from "./Banner.module.css";

export default function Banner({ searchVisible }) {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        // className="d-block w-100"
                        className={styles.coverphoto}
                        src={best1}
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
                <Carousel.Item>
                    <img
                        // className="d-block w-100"
                        className={styles.coverphoto}
                        src={img4}
                        alt="First slide"
                    />
                    {/* <Image width="50" height="50" src={best1} /> */}
                    <Carousel.Caption className={styles.textColor}>
                        <h5>4</h5>
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
                        src={img6}
                        alt="First slide"
                    />
                    {/* <Image width="50" height="50" src={best1} /> */}
                    <Carousel.Caption className={styles.textColor}>
                        <h5>6</h5>
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
                        src={img7}
                        alt="First slide"
                    />
                    {/* <Image width="50" height="50" src={best1} /> */}
                    <Carousel.Caption className={styles.textColor}>
                        <h5>7</h5>
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
                        src={img8}
                        alt="First slide"
                    />
                    {/* <Image width="50" height="50" src={best1} /> */}
                    <Carousel.Caption className={styles.textColor}>
                        <h5>8</h5>
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
                        src={img5}
                        alt="First slide"
                    />
                    {/* <Image width="50" height="50" src={best1} /> */}
                    <Carousel.Caption className={styles.textColor}>
                        <h5>5</h5>
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
                        src={img9}
                        alt="First slide"
                    />
                    {/* <Image width="50" height="50" src={best1} /> */}
                    <Carousel.Caption className={styles.textColor}>
                        <h5>9</h5>
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
                        src={img10}
                        alt="First slide"
                    />
                    {/* <Image width="50" height="50" src={best1} /> */}
                    <Carousel.Caption className={styles.textColor}>
                        <h5>10</h5>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {searchVisible && <SingleForm />}
        </>
    );
}
