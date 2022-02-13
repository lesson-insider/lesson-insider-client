import React from "react";
import Banner from "../../components/Mentorship/Banner/Banner";
import SwiperSlider from "../../components/Home/SwiperSlide/SwiperSlider";
import SwiperSlideMentorship from "../../components/Mentorship/SwiperSlideMentorship/SwiperSlideMentorship";
import styles from "./Mentorship.module.css";

export default function Mentorship() {
    const [searchVisible, setSearchVisible] = React.useState(true);
    return (
        <div className={styles.mentorships}>
            <Banner searchVisible={searchVisible} />
            <div className={styles.swiperGap}>
                <SwiperSlideMentorship featureTitle="Database" />
            </div>
            <div className={styles.swiperGap}>
                <SwiperSlideMentorship featureTitle="Data Communication" />
            </div>
            <div className={styles.swiperGap}>
                <SwiperSlideMentorship featureTitle="Engineering Ethics" />
            </div>
            <div className={styles.swiperGap}>
                <SwiperSlideMentorship featureTitle="Introduction to Programming" />
            </div>
            <div className={styles.swiperGap}>
                <SwiperSlideMentorship featureTitle="Electronic Device" />
            </div>
        </div>
    );
}
