import React from "react";
import { Accordion } from "react-bootstrap";
import OnlineFriend from "../OnlineFriends/OnlineFriend/OnlineFriend";

import styles from "./OnlineFriends.module.css";
import photo3 from "../../../images/Home/UserProfilePicture/photo3.jpg";
import photo4 from "../../../images/Home/UserProfilePicture/photo4.jpg";
import photo5 from "../../../images/Home/UserProfilePicture/photo5.jpg";
import photo1 from "../../../images/Home/UserProfilePicture/photo1.jpg";
import photo2 from "../../../images/Home/UserProfilePicture/photo2.jpg";
export default function OnlineFriends() {
    return (
        <Accordion className={styles.OnlineFriendsBody} defaultActiveKey="0">
            <Accordion.Item eventKey="0" className={styles.AccordionItem}>
                <Accordion.Header className={styles.OnlineFriendsHeader}>
                    <h3>Online Friends</h3>
                </Accordion.Header>
                <Accordion.Body className={styles.AccordionBody}>
                    <OnlineFriend
                        photo={photo3}
                        onlineFriendTextText="Mohammad Sheakh"
                    />
                    <OnlineFriend
                        photo={photo4}
                        onlineFriendTextText="Minhaz Anwar"
                    />
                    <OnlineFriend
                        photo={photo5}
                        onlineFriendTextText="Boom Boom."
                    />
                    <OnlineFriend photo={photo1} onlineFriendTextText="Mr. y" />
                    <OnlineFriend
                        photo={photo2}
                        onlineFriendTextText="Minhaz"
                    />
                    <OnlineFriend
                        photo={photo2}
                        onlineFriendTextText="Minhaz"
                    />
                    <OnlineFriend
                        photo={photo2}
                        onlineFriendTextText="Minhaz"
                    />
                    <OnlineFriend
                        photo={photo2}
                        onlineFriendTextText="Minhaz"
                    />
                    <OnlineFriend photo={photo2} onlineFriendTextText="Abir" />
                    <OnlineFriend photo={photo2} onlineFriendTextText="Abir" />
                    <OnlineFriend
                        photo={photo3}
                        onlineFriendTextText="Mohammad Sheakh"
                    />
                    <OnlineFriend
                        photo={photo4}
                        onlineFriendTextText="Minhaz Anwar"
                    />
                    <OnlineFriend
                        photo={photo5}
                        onlineFriendTextText="Boom Boom."
                    />
                    <OnlineFriend photo={photo1} onlineFriendTextText="Mr. y" />
                    <OnlineFriend
                        photo={photo2}
                        onlineFriendTextText="Minhaz"
                    />
                    <OnlineFriend
                        photo={photo2}
                        onlineFriendTextText="Minhaz"
                    />
                    <OnlineFriend
                        photo={photo2}
                        onlineFriendTextText="Minhaz"
                    />
                    <OnlineFriend
                        photo={photo2}
                        onlineFriendTextText="Minhaz"
                    />
                    <OnlineFriend photo={photo2} onlineFriendTextText="Abir" />
                    <OnlineFriend photo={photo2} onlineFriendTextText="Abir" />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}
