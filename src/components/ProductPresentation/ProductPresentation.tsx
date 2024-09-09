'use client'
import React from 'react';
import styles from './ProductPresentation.module.scss';
import Image from 'next/image';
import UHome_top from '@/assets/uhome_inv.png';
import UHome_mid from '@/assets/uhome_battery.png';
import UHome_base from '@/assets/uhome_base.png';
import UHB_top from '@/assets/uhb_m.png';
import UHB_mid from '@/assets/uhb_b.png';
import UHB_base from '@/assets/uhb_base.png';
import UHC from '@/assets/uhs_inv.png';
import Link from 'next/link';


type Props = {
    name: string
}

const ProductPresentation = ({ name }: Props) => {
    const renderImage = () => {
        if (name.includes('5K0L') || name.includes('6K0L') || name.includes('8K0L')) {
            return <Image className={styles.image} src={UHome_top} alt="UHome Top" />;
        }
        if (name === 'ULB-5120MT') {
            return <Image className={styles.image} src={UHome_mid} alt="UHome battery" />;
        }
        if (name === 'ULB-5120MT Base') {
            return <Image className={styles.image} src={UHome_base} alt="UHome Base" />;
        }
        if (name.includes('10KT') || name.includes('12KT') || name.includes('15KT') || name.includes('20KT')) {
            return <Image className={styles.image} src={UHC} alt="UHC" />;
        }
        if (name === 'UHB2560M') {
            return <Image className={styles.image} src={UHB_top} alt="UHB Top" />;
        }
        if (name === 'UHB2560S') {
            return <Image className={styles.image} src={UHB_mid} alt="UHB battery" />;
        }
        if (name === 'UHB Base') {
            return <Image className={styles.image} src={UHB_base} alt="UHB Base" />;
        }
        return null;
    };

    const renderTextAndLink = () => {
        if (name.includes('5K0L') || name.includes('6K0L') || name.includes('8K0L')) {
            return {
                text: 'Модуль однофазного гібридного інвертора для',
                linktext: 'UHome All in One ESS>',
                link: '/models/UHome-All-in-One-ESS',
            };
        } 
        if (name === 'ULB-5120MT') {
            return {
                text: 'Модуль низьковольтної батареї  для',
                linktext: 'UHome All in One ESS>',
                link: '/models/UHome-All-in-One-ESS',
            };
        } 
        if (name === 'ULB-5120MT Base') {
            return {
                text: 'Підставка  для',
                linktext: 'UHome All in One ESS>',
                link: '/models/UHome-All-in-One-ESS',
            };
        } 
        if (name.includes('10KT') || name.includes('12KT') || name.includes('15KT') || name.includes('20KT')) {
            return {
                text: 'Однофазний Гібридний інвертор для',
                linktext: 'UHB-50AH>',
                link: '/models/UHB-50Ah',
            };
        } 
        if (name === 'UHB2560M') {
            return {
                text: 'Модуль високовольтної батареї + активний еквалайзер для',
                linktext: 'UHB-50AH>',
                link: '/models/UHB-50Ah',
            };
        } 
        if (name === 'UHB2560S') {
            return {
                text: 'Модуль низьковольтної батареї для',
                linktext: 'UHB-50AH>',
                link: '/models/UHB-50Ah',
            };
        }
        if (name === 'UHB Base') {
            return {
                text: 'Підставка  для',
                linktext: 'UHB-50AH>',
                link: '/models/UHB-50Ah',
            };
        }
        return {
            text: 'Explore our range of energy solutions.',
            linktext: 'Modules> ',
            link: '/models',
        };
    };
    const { text, linktext, link } = renderTextAndLink();

    return (
        <section className={styles.container}>
            {renderImage()}
            <div className={styles.text__container}>
                <h6 className={styles.title}>{name}</h6>
                <p className={styles.description}>{text} <Link className={styles.link} href={link}>{linktext}</Link></p>
            </div>
        </section>
    )
}

export default ProductPresentation;