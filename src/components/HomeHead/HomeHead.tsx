import React from 'react';
import styles from './HomeHead.module.scss';
import Image from 'next/image';
import HomeHeader from '@/assets/ucan-power_header.png';
import UHome from '@/assets/ucan-power_UHome.png';
import UHB from '@/assets/ucan-power_UHB.png';

const HomeHead = () => {
    return (
        <section className={styles.container}>
            <Image src={HomeHeader} alt='Домівка зі світлом у блекаут' className={styles.image}/>
            <div className={styles.text__container}>
                <h1>UHome та  UHB для вашого <br /> дому, бізнесу, підприемства</h1>
                <p>Дізнатись більше&gt;</p>
            </div>
            <div className={styles.items__container}>
                <Image src={UHome} alt='UHome установка' />
                <Image src={UHB} alt='UHB-50AH установка' />
            </div>
        </section>
    )
}

export default HomeHead;