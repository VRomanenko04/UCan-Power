'use client';
import React, { useEffect, useState } from 'react';
import styles from './ProductCharacteristics.module.scss';
import { products } from '@/products';
import { useMediaQuery } from 'react-responsive';
import DownloadButton from '../DownloadButton/DownloadButton';

type Props = {
    searchTag: string
}

const ProductCharacteristics = (props: Props) => {
    const [isMounted, setIsMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    const product = products.modules.find(module => module.searchTag === props.searchTag);

    if (!product) {
        return <div>Characteristics not found</div>;
    }

    const { characteristics = {}, physicCharacteristics = {} } = product;
    const characteristicsEntries = Object.entries(characteristics);

    const firstColumnEntries = characteristicsEntries.slice(0, 16);
    const secondColumnEntries = characteristicsEntries.slice(16);

    const firstPartColumn = characteristicsEntries.slice(0, 5);
    const secondPartColumn = characteristicsEntries.slice(5);


    const DesktopContent = (
        <div className={styles.container}>
            {Object.keys(characteristics).length > 0 && (
                <ul className={styles.first__column}>
                    <h6 className={styles.title}>Характеристики</h6>
                    {firstColumnEntries.map(([key, value]) => (
                        <li className={styles.string} key={key}>{key} - {value as string}</li>
                    ))}
                    <div style={{ marginTop: 50 }}>
                        <DownloadButton />
                    </div>
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
    )

    const MobileContent = (
        <div className={styles.container}>
            <div className={styles.active__part}>
                {Object.keys(characteristics).length > 0 && (
                    <ul className={styles.list}>
                        <div >
                            <h6 className={styles.title}>Характеристики</h6>
                            {firstPartColumn.map(([key, value]) => (
                                <li className={styles.string} key={key}>{key} - {value as string}</li>
                            ))}
                        </div>
                    </ul>
                )}
            </div>
            <div className={`${styles.hidden__part} ${isOpen ? styles.show : ''} ${firstPartColumn.length === 0 ? styles.show : ''}`}>
                {secondPartColumn.length > 0 && (
                    <ul className={styles.list}>
                        <h6 className={styles.title}>Доп. характеристики</h6>
                        {secondPartColumn.map(([key, value]) => (
                            <li className={styles.string} key={key}>{key} - {value as string}</li>
                        ))}
                    </ul>
                )}
                <ul className={styles.list}>
                    <h6 className={styles.title}>Фізичні характеристики</h6>
                    {Object.entries(physicCharacteristics).map(([key, value]) => (
                            <li className={styles.string} key={key}>{key} - {value as string}</li>
                    ))}
                </ul>
            </div>
            {firstPartColumn.length > 0 && (
                <div className={styles.show__btn} onClick={() => setIsOpen(prev => !prev)}>
                    <p className={styles.btn}>{!isOpen ? 'Показати всі' : 'Сховати всі'} <p className={`${!isOpen ? styles.arrow : styles.arrow__up}`}>&gt;</p></p>
                </div>
            )}
            <div style={{ marginTop: 30}}>
                <DownloadButton />
            </div>
        </div>
    )

    if (!isMounted) {
        return null;
    }

    return (
        <section className={styles.wrapper}>
            {isMobile ? MobileContent : DesktopContent}
        </section>
    )
}

export default ProductCharacteristics;