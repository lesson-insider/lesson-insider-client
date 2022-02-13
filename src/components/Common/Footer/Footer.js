import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div>
            <div className={styles.footerMain}>
                <hr />
                <div className={styles.footerMainText}>
                    <h6>This System is developed by Bengal Digitalix.</h6>

                    <h6>
                        আমাদের ওয়েবসাইট ভিজিট করুন{" "}
                        <a href="#"> bengaldigitalix.com</a>
                    </h6>
                </div>
                {/* /////////////////////////////////////////////////////// */}
                <div>
                    <ul className={styles.footerLink}>
                        <li>
                            <Link to="/contact-us">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/toc">Terms and Condition</Link>
                        </li>
                        <li>
                            <Link to="/faq">Frequently Asking Question</Link>
                        </li>
                    </ul>
                </div>
                {/* /////////////////////////////////////////////////////////////// */}
                <div>
                    <ul className={styles.footerLink}>
                        <li>
                            <Link to="/about-us">About Us</Link>
                        </li>
                        <li>
                            <Link to="/next-goal">Next Goal</Link>
                        </li>
                        <li>
                            <Link to="/recruitment">Work with us</Link>
                        </li>
                        <li>
                            <Link to="/share-idea">Share Your Idea</Link>
                        </li>

                        <li>
                            <Link to="/report-problem">
                                Report Your Problem
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* ////////////////////////////////////////////////////// */}
                <div className={styles.footerIcon}>
                    <a href="#">
                        <i class="fab fa-2x fa-facebook "> </i>
                    </a>
                    <a href="#">
                        <i class="fab fa-2x fa-youtube "></i>
                    </a>
                    <a href="#">
                        <i class="fas fa-2x fa-envelope "></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-2x fa-instagram "></i>
                    </a>
                </div>
                <hr />
            </div>
            <div className={styles.copyRight}>
                <h6>© 2022-2023 Copyright</h6>
            </div>
        </div>
    );
}
