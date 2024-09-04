import React from 'react';
import styles from './HomeHead.module.scss';
import Image from 'next/image';
import HomeHeader from '@/assets/ucan-power_header.png';

const HomeHead = () => {
    return (
        <section className={styles.container}>
            <Image src={HomeHeader} alt='Домівка зі світлом у блекаут' className={styles.image}/>
        </section>
    )
}

export default HomeHead;