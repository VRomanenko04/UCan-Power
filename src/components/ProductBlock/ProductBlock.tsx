'use client';
import React, { useEffect, useState } from 'react';
import styles from './ProductBlock.module.scss';
import { useMediaQuery } from 'react-responsive';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type ProductBlockProps = {
    name: string
    description: string
    image: StaticImageData
    price?: string
}

const ProductBlock = (props: ProductBlockProps) => {
    const [isMounted, setIsMounted] = useState(false);
    
    const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const content = (
        <div className={styles.container}>
            <div className={styles.image__container}>
                <Image className={`${styles.image} ${!props.price ? styles.long__image : ''}`} src={props.image} alt={props.description} />
            </div>
            <div className={styles.title}>
                <h6>{props.name}</h6>
                <p>{props.price}</p>
            </div>
            <p className={styles.description}>{props.description}</p>
            <Link className={styles.btn} href='/models'>Дізнатись більше</Link>
        </div>
    );

    if (!isMounted) {
        return null;
    }

    return isMobile ? (
        <Link href='/models' className={styles.mobile__link}>
            {content}
        </Link>
    ) : (
        content
    );
}

export default ProductBlock;