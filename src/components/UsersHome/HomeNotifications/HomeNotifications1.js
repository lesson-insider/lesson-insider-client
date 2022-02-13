import React from "react";
import styles from "./HomeNotifications1.module.css";
import HomeNotification from "./HomeNotification/HomeNotification";
import photo3 from "../../../images/Home/UserProfilePicture/photo3.jpg";
import photo4 from "../../../images/Home/UserProfilePicture/photo4.jpg";
import photo5 from "../../../images/Home/UserProfilePicture/photo5.jpg";
import photo1 from "../../../images/Home/UserProfilePicture/photo1.jpg";
import photo2 from "../../../images/Home/UserProfilePicture/photo2.jpg";
export default function LessonInsider() {
    return (
        <div className={styles.NotificationBody}>
            <div>
                <h3>Notifications</h3>
            </div>
            <HomeNotification
                photo={photo3}
                notificationTextText="Sami started to following you."
            />
            <HomeNotification
                photo={photo4}
                notificationTextText="Minhaz accepts you as a Friend."
            />
            <HomeNotification
                photo={photo5}
                notificationTextText='Minhaz posted an article on "Physics Problems".'
            />
            <HomeNotification
                photo={photo1}
                notificationTextText="Rabbi wishes to send you 50 taka on Your Note"
            />
            <HomeNotification
                photo={photo2}
                notificationTextText="Minhaz commented on your post."
            />
            <HomeNotification
                photo={photo2}
                notificationTextText="Minhaz commented on your post."
            />
            <HomeNotification
                photo={photo2}
                notificationTextText="Minhaz commented on your post."
            />
            <HomeNotification
                photo={photo2}
                notificationTextText="Minhaz commented on your post."
            />
            <HomeNotification
                photo={photo2}
                notificationTextText="Minhaz commented on your post."
            />
            <HomeNotification
                photo={photo2}
                notificationTextText="Minhaz commented on your post."
            />
        </div>
    );
}
