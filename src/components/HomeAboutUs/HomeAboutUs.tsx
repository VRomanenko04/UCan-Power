import React from 'react';
import styles from './HomeAboutUs.module.scss';
import Building_image from '@/assets/ucan-power_building.png';
import Image from 'next/image';


const HomeAboutUs = () => {
    return (
        <section className={styles.container}>
            <div className={styles.image__container}>
                <Image className={styles.image} src={Building_image} alt='Завод UCan Power'/>
                <h3>ПРО UCANPOWER</h3>
            </div>
            <div className={styles.text__container}>
                <p>UCANPOWER - передові технології в галузі зберігання електроенергії які зосереджується на забезпеченні економічно ефективних та спеціально розроблених рішень для побутових, промислових та комерційних галузях.</p>
                <p>UCANPOWER - успішно експортує обладнання в понад 30 країн, включаючи Європу, Японію, Австралію, Південно-Східну Азію, Південну Америку та країни Африки.</p>
            </div>
        </section>
    )
}

export default HomeAboutUs;