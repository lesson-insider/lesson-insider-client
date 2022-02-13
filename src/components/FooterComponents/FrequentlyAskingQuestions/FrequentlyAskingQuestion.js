import React from "react";
import { Accordion } from "react-bootstrap";

import styles from "./FrequentlyAskingQuestion.module.css";
import faq1 from "../../../icons/faq/faq2.png";
import QnA from "./QnA/QnA";

export default function FrequentlyAskingQuestion() {
    return (
        <div className={styles.FAQBody}>
            <div className={styles.extra}></div>
            <div className={styles.FAQ}>
                <img className={styles.FAQIcon} src={faq1} alt="" />

                <div className={styles.FAQTitle}>
                    <h1>FrequentlyAskingQuestion</h1>
                    <div className={styles.FAQDetails}>
                        <Accordion defaultActiveKey="0">
                            <QnA
                                eventKey="0"
                                header="fdf"
                                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
                            />
                            <QnA eventKey="1" header="fdf" body="dsdsd" />
                            <QnA eventKey="2" header="fdf" body="dsdsd" />
                            <QnA eventKey="3" header="fdf" body="dsdsd" />
                            <QnA eventKey="4" header="fdf" body="dsdsd" />
                            <QnA eventKey="5" header="fdf" body="dsdsd" />
                            <QnA eventKey="6" header="fdf" body="dsdsd" />
                            <QnA eventKey="7" header="fdf" body="dsdsd" />
                            <QnA eventKey="8" header="fdf" body="dsdsd" />
                            <QnA
                                eventKey="9"
                                header="fdf"
                                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
                            />
                        </Accordion>
                    </div>
                    <div>
                        <h2 className={styles.Asktitle}>
                            Don't find your question !{" "}
                        </h2>
                        <h1 className={styles.Asktitle2}>Ask Your Question</h1>
                        <h1 className={styles.Asktitle2}>
                            এখানে একটা ফর্ম থাকবে, ইমেইল ফর্ম সহ .. কারন নন
                            মেম্বারদের ইমেইল করে এন্সার দিতে হবে ... আর যাদের
                            একাউন্ট আছে ... তাদের আর ইমেইল চাওয়া লাগবে না ...
                            তাদের মেসেজ বক্সে রিপ্লাই যাবে
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
