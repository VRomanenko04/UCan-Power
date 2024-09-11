'use client';
import React, { useEffect, useState } from 'react';
import styles from './HomeHead.module.scss';
import Image from 'next/image';
import HomeHeader from '@/assets/ucan-power_header.png';
import ModileHomeHeader from '@/assets/ucanpowerbg_mobilka.webp';
import UHome from '@/assets/UHome_big_image.svg';
import UHB from '@/assets/UHB50_big_size.svg';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';

const HomeHead = () => {
    const [isMounted, setIsMounted] = useState(false);
    
    const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const content = (
        <section className={styles.container}>
            <Image src={ !isMobile ? HomeHeader : ModileHomeHeader} alt='Домівка зі світлом у блекаут' className={styles.image}/>
            <div className={styles.text__container}>
                <h1>UHome та  UHB для вашого <br /> дому, бізнесу, підприемства</h1>
                <Link className={styles.link} href='/models'>Дізнатись більше&gt;</Link>
            </div>
            <div className={styles.items__container}>
                <Image className={styles.item} src={UHome} alt='UHome установка' />
                <Image className={styles.item} src={UHB} alt='UHB-50AH установка' />
            </div>
        </section>
    );

    if (!isMounted) {
        return null;
    }

    return (
        content
    )
}

export default HomeHead;