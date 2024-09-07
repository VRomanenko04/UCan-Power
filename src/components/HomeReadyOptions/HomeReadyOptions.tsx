import React from 'react';
import styles from './HomeReadyOptions.module.scss';
import { products } from '@/products';
import ProductBlock from '../ProductBlock/ProductBlock';
import Image from 'next/image';
import Arrow from '@/assets/UCan-power_arrow.svg';
import Link from 'next/link';


const HomeReadyOptions = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <Link href='/' className={styles.title}>ГОТОВІ РІШЕННЯ <Image src={Arrow} alt='arrow'/></Link>
                <section className={styles.products__container}>
                    {products.ready_solutions.map((product) => (
                        <div key={product.name}>
                            <ProductBlock 
                                name={product.name}
                                description={product.description}
                                image={product.image}
                            />
                        </div>
                    ))}
                </section>
            </div>
        </section>
    )
}

export default HomeReadyOptions;