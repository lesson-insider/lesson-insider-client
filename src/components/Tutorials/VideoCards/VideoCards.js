import React, { useRef, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import VideoCard from "./VideoCard/VideoCard";
import styles from "./VideoCards.module.css";
import { FcSearch } from "react-icons/fc";
// import Options from "../OptionsForTutorials/Options";
import SingleForm from "../../../components/Common/SingleForm/SingleForm";

export default function VideoCards() {
    return (
        <div className={styles.MainVideoCards}>
            <div className={styles.SingleForm}>
                <SingleForm />
            </div>

            <VideoCard
                urlLink="https://www.youtube.com/watch?v=dAv7UDlmkvQ&t=384s&ab_channel=BusinessInspectionBD"
                title="এয়ারলাইন্স এর কাহিনি"
            />
            <VideoCard
                title="ইপিজেড এর কাজ"
                urlLink="https://www.youtube.com/watch?v=bpAJf6f5Uf8&ab_channel=BusinessInspectionBD"
            />
            <VideoCard
                title="হাতিল"
                urlLink="https://www.youtube.com/watch?v=fsZJHX71FGQ&ab_channel=BusinessInspectionBD"
            />
            <VideoCard
                title="মিমি"
                urlLink="https://www.youtube.com/watch?v=7K297ShN4Pw&ab_channel=BusinessInspectionBD"
            />
            <VideoCard urlLink="https://www.youtube.com/watch?v=TEbQpW5n_bQ&t=629s&ab_channel=BusinessInspectionBD" />
            <VideoCard urlLink="https://www.youtube.com/watch?v=wDpYGl6BoDw&t=217s&ab_channel=BusinessInspectionBD" />
            <VideoCard urlLink="https://www.youtube.com/watch?v=LUG7Y-9n6D8&t=718s&ab_channel=BusinessInspectionBD" />
            <VideoCard urlLink="https://www.youtube.com/watch?v=AJ0ItxJvMBI&ab_channel=BusinessInspectionBD" />
            <VideoCard urlLink="https://www.youtube.com/watch?v=96Zz6oluOng&t=92s&ab_channel=BusinessInspectionBD" />
            <VideoCard urlLink="https://www.youtube.com/watch?v=6x2OadPdVe0&ab_channel=BusinessInspectionBD" />
            <VideoCard urlLink="https://www.youtube.com/watch?v=cu933khJPV4&ab_channel=BusinessInspectionBD" />
            <VideoCard urlLink="https://www.youtube.com/watch?v=ue61N37sPZY&ab_channel=BusinessInspectionBD" />
            <VideoCard urlLink="https://www.youtube.com/watch?v=dKZ_wfJhcpY&ab_channel=BusinessInspectionBD" />
            <VideoCard urlLink="https://www.youtube.com/watch?v=zr4CYl37bEk&ab_channel=BusinessInspectionBD" />
            <VideoCard urlLink="https://www.youtube.com/watch?v=rfdIUWn7zus&ab_channel=BusinessInspectionBD" />
            <VideoCard urlLink="https://www.youtube.com/watch?v=EOO8Nv-hiZY&ab_channel=BusinessInspectionBD" />
            <VideoCard urlLink="https://www.youtube.com/watch?v=zdzFEQw-rI8&ab_channel=BusinessInspectionBD" />
            <VideoCard urlLink="https://www.youtube.com/watch?v=VAraLKVRNeQ&ab_channel=BusinessInspectionBD" />
        </div>
    );
}
