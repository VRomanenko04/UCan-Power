'use client';
import React from 'react';
import styles from './ReadySolutionHead.module.scss';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type ReadySolutionHeadProps = {
    name: string
    image_big: StaticImageData
    image_mid: StaticImageData
    image_small: StaticImageData
}

const ReadySolutionHead = (props: ReadySolutionHeadProps) => {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>{props.name}</h2>
            <div className={styles.container}>
                <Image className={styles.image} src={props.image_mid} alt='Конвертор з батареєю середній'/>
                <Image className={styles.image} src={props.image_big} alt='Конвертор з батареєю великий'/>
                <Image className={styles.image} src={props.image_small} alt='Конвертор з батареєю маленький'/>
            </div>
        </section>
    )
}

export default ReadySolutionHead;