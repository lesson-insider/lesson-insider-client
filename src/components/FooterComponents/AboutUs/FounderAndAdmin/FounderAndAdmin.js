import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import MohammadSheakh from "../../../../images/Home/UserProfilePicture/photo5.jpg";
// import MustaqueNadim from "../../"
import facebook from "../../../../icons/about/facebook.png";
import youtube from "../../../../icons/about/youtube.png";
import linkedin1 from "../../../../icons/about/linkedin1.png";
import linkedin2 from "../../../../icons/about/linkedin2.png";

import styles from "./FounderAndAdmin.module.css";
export default function FounderAndAdmin() {
    const nadimImage =
        "https://mir-s3-cdn-cf.behance.net/user/276/d8b548384867537.5d243f286a828.jpg";
    return (
        <div className={styles.FounderAndAdmin}>
            <div className={styles.FounderAndAdminImage}>
                <div className={styles.Person}>
                    <div className={styles.PersonImage1}>
                        <img
                            className={styles.PersonImage}
                            src={nadimImage}
                            alt=""
                        />
                    </div>
                    <h3 className={styles.PersonName}>
                        Nadim Mustaque{" "}
                        <span className={styles.blueTikMark}>
                            <BsFillCheckCircleFill />
                        </span>
                    </h3>
                    <h4 className={styles.PersonDesignation}>
                        Founder And Admin
                    </h4>
                    <div className={styles.icons}>
                        <a
                            href="https://www.facebook.com/engr.mustaquenadim"
                            target="_blank"
                        >
                            <img
                                src={facebook}
                                className={styles.icon}
                                alt=""
                            />
                        </a>
                        <a href="" target="_blank">
                            <img src={youtube} className={styles.icon} alt="" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mustaquenadim/"
                            target="_blank"
                        >
                            <img
                                src={linkedin2}
                                className={styles.icon}
                                alt=""
                            />
                        </a>
                    </div>
                </div>
                <div className={styles.Person}>
                    <div className={styles.PersonImage1}>
                        <img
                            className={styles.PersonImage}
                            src={MohammadSheakh}
                            alt=""
                        />
                    </div>

                    <h3 className={styles.MohammadName}>
                        Mohammad Bin Abdul Jalil Sheakh{" "}
                        <span className={styles.blueTikMark}>
                            <BsFillCheckCircleFill />
                        </span>
                    </h3>
                    <h4 className={styles.PersonDesignation}>
                        Founder And Admin
                    </h4>
                    <div className={styles.icons}>
                        <a
                            target="_blank"
                            href="https://www.facebook.com/mohammadsheakh.mern/"
                        >
                            <img
                                src={facebook}
                                className={styles.icon}
                                alt=""
                            />
                        </a>

                        <a
                            href="https://www.youtube.com/channel/UCBpDPLYKRBkjXqGY6Mz_IDA/videos"
                            target="_blank"
                        >
                            <img src={youtube} className={styles.icon} alt="" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mohammad-sheakh/"
                            target="_blank"
                        >
                            <img
                                src={linkedin2}
                                className={styles.icon}
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
