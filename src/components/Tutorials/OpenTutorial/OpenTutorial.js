import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";
import styles from "./OpenTutorial.module.css";
function useQuery() {
    return new URLSearchParams(useLocation().search);
    // that simply allow us to use it as a hook...
}
export default function OpenTutorial() {
    const query = useQuery();
    const searchQuery = query.get("searchQuery");
    const navigate = useNavigate();
    const backBtnHandler = () => {
        navigate("/tutorials");
    };
    return (
        <div className={styles.VideoDetails}>
            <ReactPlayer
                className={styles.OnlyVideo}
                // width="580px"
                // height="369px"
                controls
                url={searchQuery}
                // url="https://www.facebook.com/mohammadsheakh.mern/videos/1248415582317251"
                // url="https://www.youtube.com/watch?v=Fh1iADnV96Y&t=4s&ab_channel=GalleryofSheakh"
                // ekhane onStart, onReady, onPause, onEnded, onError shoho aro kichu callback ase
                onError={() => alert("An Error is occurred")}
            />
            <div>
                <h2>
                    Video Title and Everything .. Comments ... Simmilar category
                    video
                </h2>
                <Button onClick={backBtnHandler}>Back to all tutorials</Button>
            </div>
        </div>
    );
}
