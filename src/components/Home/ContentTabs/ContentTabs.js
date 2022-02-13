import React from "react";
import styles from "./ContentTabs.module.css";

import ContentCard from "./ContentTab/ContentCard";
import { Card } from "react-bootstrap";

export default function ContentTabs({ featureTitle }) {
    return (
        <div className={styles.master}>
            {featureTitle ? (
                <>
                    <h1 className={styles.title}>{featureTitle}</h1>
                    <div className={styles.main}>
                        <ContentCard contentStatus="free" />
                        <ContentCard contentStatus="free" />
                        <ContentCard contentStatus="paid" />
                        <ContentCard contentStatus="paid" />
                        <ContentCard contentStatus="free" />
                        <ContentCard contentStatus="paid" />
                    </div>
                </>
            ) : (
                <div className={styles.main}>
                    <ContentCard />
                    <ContentCard />
                    <ContentCard />
                    <ContentCard />
                    <ContentCard />
                    <ContentCard />
                </div>
            )}
        </div>
    );
}
