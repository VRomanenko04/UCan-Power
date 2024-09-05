import React from 'react';
import styles from './HomeOfficialPartner.module.scss';
import Image from 'next/image';
import Box_icon from '@/assets/Box_icon.svg';
import Mashine_icon from '@/assets/Mashine_icon.svg';
import Certificate_icon from '@/assets/Certificate_icon.svg';


const HomeOfficialPartner = () => {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>ОФІЦІЙНИЙ ПАРТНЕР В УКРАЇНІ</h2>
            <div className={styles.container}>
                <div className={styles.item__container}>
                    <Image src={Box_icon} alt='Іконка коробки'/>
                    <h3>ПРЯМІ ПОСТАВКИ</h3>
                </div>
                <div className={`${styles.central__item} ${styles.item__container}`}>
                    <Image src={Mashine_icon} alt='Іконка шестерні'/>
                    <h3>УСТАНОВКА <br/> ОБЛАДНАННЯ</h3>
                </div>
                <div className={styles.item__container}>
                    <Image src={Certificate_icon} alt='Іконка сертифікату'/>
                    <h3>ОФІЦІЙНА ГАРАНТІЯ</h3>
                </div>
            </div>
        </section>
    )
}

export default HomeOfficialPartner;