import React from "react";
import Footer from "../../components/Common/Footer/Footer";
import MainNavbar from "../../components/Common/MainNavbar/MainNavbar";
import Banner from "../../components/Home/Banner/Banner";
import CircularProgresss from "../../components/Home/CircularProgresss/CircularProgresss";
import ContentTabs from "../../components/Home/ContentTabs/ContentTabs";

import CurrentTopics from "../../components/Home/CurrentTopics/CurrentTopics";
import Info from "../../components/Home/Info/Info";
import StartIntro from "../../components/Home/StartIntro/StartIntro";
import Video from "../../components/Home/Video/Video";
import styles from "./Home.module.css";
import SwiperCarousel from "../../components/Home/Swiper/SwiperCarosel";
import SearchBarView from "../../components/Common/SingleForm/SearchBarView";
import SwiperSlider from "../../components/Home/SwiperSlide/SwiperSlider";
import SwiperSlideMentorship from "../../components/Mentorship/SwiperSlideMentorship/SwiperSlideMentorship";

export default function Home() {
    const [searchVisible, setSearchVisible] = React.useState(true);
    return (
        <div className={styles.homeContainer}>
            {/* <MainNavbar /> */}
            <Banner searchVisible={searchVisible} />
            {/* <SearchBarView /> */}

            <CurrentTopics />
            <StartIntro />
            <CircularProgresss />

            <Info />

            {/* <Video /> */}

            <div className={styles.swiperGap}>
                <SwiperSlider featureTitle="Notes" />
            </div>

            <div className={styles.swiperGap}>
                <SwiperSlideMentorship featureTitle="Our Mentors" />
            </div>

            <div className={styles.swiperGap}>
                <SwiperSlider featureTitle="Our Mentors" />
            </div>

            {/* <ContentTabs featureTitle="Notes" />
            <ContentTabs />
            <ContentTabs featureTitle="Tutorials" />
            <ContentTabs />
            <ContentTabs featureTitle="Mentors" />
            <ContentTabs /> */}

            {/* <SwiperCarousel /> */}

            <Footer />
        </div>
    );
}
