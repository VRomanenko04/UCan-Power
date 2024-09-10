import { products } from '@/products';
import React from 'react';
import styles from './RecommendedProducts.module.scss';
import ProductBlock from '../ProductBlock/ProductBlock';

type Props = {
    tag: string
}

const RecommendedProducts = ({ tag }: Props) => {
    const baseProductsList = products.modules.filter(module => module.tag === tag);

    let productsList = [...baseProductsList];

    // Обработка дополнительных продуктов
    if (tag === 'UHC') {
        const additionalProducts = products.modules.filter(module => module.tag === 'UHB');
        productsList = [...productsList, ...additionalProducts];
    }

    if (tag === 'UHome' || tag === 'UHB') {
        const additionalProducts = products.modules.filter(module => module.tag === 'UHC');
        productsList = [...productsList, ...additionalProducts];
    }

    if (productsList.length === 0) {
        return <div>Recommended products not found</div>;
    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <h3 className={styles.title}>СУПУТНІ ТОВАРИ</h3>
                <div className={styles.products__list}>
                    {productsList.map(product => (
                        <div key={product.name}>
                            <ProductBlock 
                                name={product.name}
                                description={product.description}
                                image={product.image}
                                price={product.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RecommendedProducts;