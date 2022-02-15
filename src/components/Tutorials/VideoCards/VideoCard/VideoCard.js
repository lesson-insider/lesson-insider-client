import React from "react";
import styles from "./VideoCard.module.css";
import video1 from "../../../../videos/video1.mp4";
import ReactPlayer from "react-player";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import OpenTutorial from "../../OpenTutorial/OpenTutorial";
import { BsFillCheckCircleFill } from "react-icons/bs";

// import BaseReactPlayer from "react-player/base";
export default function VideoCard({ urlLink, title }) {
    // const handleControl = () => {
    //     controls
    // };
    const navigate = useNavigate();
    const fbVideo =
        "https://www.facebook.com/mohammadsheakh.mern/videos/1248415582317251";
    const ytvideo =
        "https://www.youtube.com/watch?v=Fh1iADnV96Y&t=4s&ab_channel=GalleryofSheakh";

    const handleOpen = () => {
        navigate(`/tutorial/?searchQuery=${urlLink}`);
    };
    return (
        <div className={styles.mainVideoCard}>
            <div className={styles.Video}>
                {/* <iframe
                    width="370"
                    height="230"
                    src="https://www.youtube.com/embed/Fh1iADnV96Y"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe> */}
                {/* <video
                    width="370"
                    height="230"
                    controls
                    // autoplay
                    // muted
                    // onHover={handleControl}
                    src={video1}
                ></video> */}

                <ReactPlayer
                    width="370px"
                    height="230px"
                    controls
                    url={urlLink}
                    // url={video1}
                    // url="https://www.youtube.com/watch?v=Fh1iADnV96Y&t=4s&ab_channel=GalleryofSheakh"
                    // url={ytvideo}
                    // ekhane onStart, onReady, onPause, onEnded, onError shoho aro kichu callback ase
                    onError={() => alert("An Error is occurred")}
                />
            </div>
            <div className={styles.VideoDetails}>
                <h5 className={styles.VideoTitle} onClick={handleOpen}>
                    {" "}
                    {/* আন্তর্জাতিক কুরআন তিলাওয়াত সোহাইল আহমেদ তারিন */}
                    {title}
                </h5>
                <h5 className={styles.VideoTitle}>
                    Mohammad Bin Ab. Jalil Sheakh
                    <span className={styles.blueTikMark}>
                        <BsFillCheckCircleFill />
                    </span>
                </h5>
                {/* <div className={styles.moreInfo}> */}

                {/* <h5>4 years ago</h5> */}

                <div className={styles.tagsButton}>
                    <Button className={styles.buttonTag}>BGS</Button>
                    <Button className={styles.buttonTag}>CSE</Button>
                    <Button className={styles.buttonTag}>Database</Button>
                    <Button className={styles.buttonTag}>Chemistry</Button>
                </div>
                {/* </div> */}

                {/* <Link as={Link} to={`/tutorial/?searchQuery=${ytvideo}`}>
                    <h4>আন্তর্জাতিক কুরআন তিলাওয়াত</h4>
                </Link> */}
                {/* <Button>
                </Button> */}
            </div>
        </div>
    );
}
