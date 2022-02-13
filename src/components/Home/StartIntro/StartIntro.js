import React from "react";
import styles from "./StartIntro.module.css";
import { AiFillTags } from "react-icons/ai";
import money1 from "../../../icons/home/money1.png";
import money2 from "../../../icons/home/money2.png";
import money3 from "../../../icons/home/money3.png";
import hierarchy1 from "../../../icons/home/hierarchy1.png";
import hierarchy2 from "../../../icons/home/hierarchy2.png";
import mentor1 from "../../../icons/home/mentor1.png";
import discussion1 from "../../../icons/home/discussion1.png";
import discussion2 from "../../../icons/home/discussion2.png";

export default function StartIntro() {
    return (
        <section>
            <div className={styles.masterDiv}>
                <div className={styles.leftOne}>
                    <div className={styles.icon}>
                        {/* <AiFillTags /> */}
                        <img src={hierarchy2} />
                        {/* <img src={hierarchy1} /> */}
                    </div>
                    <div className={styles.description}>
                        <h4>Proper Solution in Proper Place</h4>
                        <br />
                        <p>
                            The Lesson Insider platform is designed in such a
                            way that anyone can upload notes, lectures,
                            animations, videos or any study material on any
                            topic. And anyone can search and save the desired
                            notes on that topic in an organized way.
                        </p>
                    </div>
                </div>
                <div className={styles.rightOne}>
                    <div className={styles.icon}>
                        {/* <AiFillTags /> */}
                        <img src={mentor1} />
                    </div>
                    <div className={styles.description}>
                        <h4>Proper Solution in Proper Place</h4>
                        <br />
                        <p>
                            If you are proficient in any subject, you can be the
                            mentor of that subject. By doing this, the students
                            will be able to understand the subject by making
                            audio video call with the mentor, the students will
                            be able to follow the mentor .. If the mentor is
                            online, the active list of the students will show
                            them who is active. Mentors will be able to provide
                            services to learners for free / for money.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.masterDiv}>
                <div className={styles.leftOne}>
                    <div className={styles.icon}>
                        {/* <AiFillTags /> */}
                        <img src={money1} />
                        {/* <img src={money2} /> */}
                    </div>
                    <div className={styles.description}>
                        <h4>Proper Solution in Proper Place</h4>
                        <br />
                        <p>
                            Sharing any study related material on this platform
                            is a good way to earn money. Every content is an
                            opportunity for Lifetime Income. If the content
                            viewer wants, he can instantly transfer money to the
                            content provider through mobile banking. .. will be
                            able to save his name along with the specified
                            amount, so that the money in the account can
                            actually or send money in the future. ..
                        </p>
                    </div>
                </div>
                <div className={styles.rightOne}>
                    <div className={styles.icon}>
                        {/* <AiFillTags /> */}
                        {/* <img src={discussion1} /> */}

                        <img src={discussion2} />
                    </div>
                    <div className={styles.description}>
                        <h4>Proper Solution in Proper Place</h4>
                        <br />
                        <p>
                            Students will encounter various problems while
                            studying, they will be able to post those problems
                            under specific category on Lesson Insider platform.
                            By doing this, the notification will go to those who
                            are experts and mentors. .. They and other ordinary
                            students will be able to solve the problem of Rao ..
                            If they solve the problem, there is also an
                            opportunity to get different badges.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
