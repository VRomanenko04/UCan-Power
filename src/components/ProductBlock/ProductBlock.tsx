import React from 'react';
import styles from './ProductBlock.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type ProductBlockProps = {
    name: string
    description: string
    image: StaticImageData
    price?: string
}

const ProductBlock = (props: ProductBlockProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.image__container}>
                <Image className={`${styles.image} ${!props.price ? styles.long__image: ''}`} src={props.image} alt={props.description}/>
            </div>
            <div className={styles.title}>
                <h6>{props.name}</h6>
                <p>{props.price}</p>
            </div>
            <p className={styles.description}>{props.description}</p>
            <Link className={styles.btn} href='/models'>Дізнатись більше</Link>
        </div>
    )
}

export default ProductBlock;