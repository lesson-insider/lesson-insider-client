import React from "react";
import Footer from "../../../components/Common/Footer/Footer";
import AboutText from "../../../components/FooterComponents/AboutUs/AboutText/AboutText";
import Banner from "../../../components/FooterComponents/AboutUs/Banner/Banner";
import FounderAndAdmin from "../../../components/FooterComponents/AboutUs/FounderAndAdmin/FounderAndAdmin";
import styles from "./AboutUs.module.css";
export default function AboutUs() {
    return (
        <div className={styles.aboutTextMaster}>
            <Banner />

            <FounderAndAdmin />
            <AboutText />
            <Footer />
        </div>
    );
}
