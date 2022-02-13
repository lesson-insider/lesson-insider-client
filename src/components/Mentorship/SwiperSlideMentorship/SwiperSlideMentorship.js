import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import styles from "./SwiperSlideMentorship.module.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import Mentorship from "../../Profile/UserMentorship/Mentorship/Mentorship";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function SwiperSlideMentorship({ featureTitle }) {
    return (
        <>
            {featureTitle ? (
                <>
                    <h1 className={styles.title}>{featureTitle}</h1>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        // koyta kore slide change hobe
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        // autoplay={2000}
                        // autoplayDisableOnInteraction={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            500: { width: 500, slidesPerView: 1 },
                            640: { width: 640, slidesPerView: 3 },
                            768: { width: 768, slidesPerView: 3 },
                            785: { width: 785, slidesPerView: 3 },
                            893: { width: 893, slidesPerView: 3 },
                        }}
                        navigation={true}
                        className="mySwiper"
                        className={styles.mainCustom}
                    >
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>

                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                        <SwiperSlide className={styles.custom}>
                            <Mentorship />
                        </SwiperSlide>
                    </Swiper>
                </>
            ) : (
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    // koyta kore slide change hobe
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    // autoplay={2000}
                    // autoplayDisableOnInteraction={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        500: { width: 500, slidesPerView: 1 },
                        531: { width: 531, slidesPerView: 1 },
                        586: { width: 586, slidesPerView: 1 },
                        640: { width: 640, slidesPerView: 3 },
                        689: { width: 689, slidesPerView: 3 },
                        768: { width: 768, slidesPerView: 3 },
                        785: { width: 785, slidesPerView: 3 },
                        796: { width: 796, slidesPerView: 3 },
                        830: { width: 830, slidesPerView: 3 },
                        849: { width: 849, slidesPerView: 3 },
                        867: { width: 867, slidesPerView: 3 },
                        893: { width: 893, slidesPerView: 3 },
                        898: { width: 898, slidesPerView: 3 },
                        906: { width: 906, slidesPerView: 3 },
                        917: { width: 917, slidesPerView: 3 },
                        966: { width: 966, slidesPerView: 3 },
                        1000: { width: 1000, slidesPerView: 3 },
                    }}
                    navigation={true}
                    className="mySwiper"
                    className={styles.mainCustom}
                >
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>

                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                    <SwiperSlide className={styles.custom}>
                        <Mentorship />
                    </SwiperSlide>
                </Swiper>
            )}
        </>
    );
}
