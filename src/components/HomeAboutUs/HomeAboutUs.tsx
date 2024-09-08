'use client';
import React, { useEffect, useState } from 'react';
import styles from './HomeAboutUs.module.scss';
import Building_image from '@/assets/ucan-power_building.png';
import Modile_building_image from '@/assets/ucanpower_buildingmobilka.webp';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';


const HomeAboutUs = () => {
    const [isMounted, setIsMounted] = useState(false);
    
    const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const content = (
        <section className={styles.container}>
            <div className={styles.image__container}>
                <Image className={styles.image} src={!isMobile ? Building_image : Modile_building_image} alt='Завод UCan Power'/>
                <h3>ПРО UCANPOWER</h3>
            </div>
            <div className={styles.text__container}>
                <p>UCANPOWER - передові технології в галузі зберігання електроенергії які зосереджується на забезпеченні економічно ефективних та спеціально розроблених рішень для побутових, промислових та комерційних галузях.</p>
                <p>UCANPOWER - успішно експортує обладнання в понад 30 країн, включаючи Європу, Японію, Австралію, Південно-Східну Азію, Південну Америку та країни Африки.</p>
            </div>
        </section>
    )

    if (!isMounted) {
        return null;
    }

    return (
        content
    )
}

export default HomeAboutUs;