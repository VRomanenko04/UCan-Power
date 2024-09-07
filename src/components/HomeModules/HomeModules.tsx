import React from 'react';
import styles from './HomeModules.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Arrow from '@/assets/UCan-power_arrow.svg';
import { products } from '@/products';
import ProductBlock from '../ProductBlock/ProductBlock';


const HomeModules = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <Link href='/models' className={styles.title}>ОКРЕМІ МОДУЛІ <Image src={Arrow} alt='arrow'/></Link>
                <section className={styles.products__container}>
                    {products.modules.slice(0, 7).map((product) => (
                        <div key={product.name}>
                            <ProductBlock 
                                name={product.name}
                                description={product.description}
                                image={product.image}
                                price={product.price}
                            />
                        </div>
                    ))}
                </section>
            </div>
        </section>
    )
}

export default HomeModules;