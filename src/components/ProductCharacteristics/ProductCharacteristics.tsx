import React from 'react';
import styles from './ProductCharacteristics.module.scss';
import { products } from '@/products';

type Props = {
    searchTag: string
}

const ProductCharacteristics = (props: Props) => {
    const product = products.modules.find(module => module.searchTag === props.searchTag);

    if (!product) {
        return <div>Characteristics not found</div>;
    }

    const { characteristics = {}, physicCharacteristics = {} } = product;
    const characteristicsEntries = Object.entries(characteristics);

    const firstColumnEntries = characteristicsEntries.slice(0, 16);
    const secondColumnEntries = characteristicsEntries.slice(16);

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                {Object.keys(characteristics).length > 0 && (
                    <ul className={styles.first__column}>
                        <h6 className={styles.title}>Характеристики</h6>
                        {firstColumnEntries.map(([key, value]) => (
                            <li className={styles.string} key={key}>{key} - {value as string}</li>
                        ))}
                    </ul>
                )}
                <div>
                    {secondColumnEntries.length > 0 && (
                        <ul className={styles.second__column__additional}>
                            <h6 className={styles.title}>Доп. характеристики</h6>
                            {secondColumnEntries.map(([key, value]) => (
                                <li className={styles.string} key={key}>{key} - {value as string}</li>
                            ))}
                        </ul>
                    )}
                    <ul className={styles.second__column}>
                        <h6 className={styles.title}>Фізичні характеристики</h6>
                        {Object.entries(physicCharacteristics).map(([key, value]) => (
                                <li className={styles.string} key={key}>{key} - {value as string}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProductCharacteristics;