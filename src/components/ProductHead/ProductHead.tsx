'use client';
import React, { useEffect, useState } from 'react';
import styles from './ProductHead.module.scss';
import Image, { StaticImageData } from 'next/image';
import UHome_invertor from '@/assets/ucan-power_invertorUHome.png';
import UHC from '@/assets/ucan-power_UHC.png';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

type ProductHeadProps = {
    name: string
    description: string
    image: StaticImageData
    price?: string
}

const relatedModelsUHome = [
    {
        name: "UHome-5K0L",
        image: UHome_invertor,
        link: '/models/UHome-5K0L',
    },
    {
        name: "UHome-6K0L",
        image: UHome_invertor,
        link: '/models/UHome-6K0L'
    },
    {
        name: "UHome-8K0L",
        image: UHome_invertor,
        link: '/models/UHome-8K0L'
    }
];

const relatedModelsUHC = [
    {
        name: "UHC-10KT",
        image: UHC,
        link: '/models/UHC-10KT'
    },
    {
        name: "UHC-12KT",
        image: UHC,
        link: '/models/UHC-12KT'
    },
    {
        name: "UHC-15KT",
        image: UHC,
        link: '/models/UHC-15KT'
    },
    {
        name: "UHC-20KT",
        image: UHC,
        link: '/models/UHC-20KT'
    }
];


const ProductHead = (props: ProductHeadProps) => {
    const pathname = usePathname();
    const lastSegment = pathname.split('/').pop();

    const [isMounted, setIsMounted] = useState(false);
    
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const showRelatedModels = (modelGroup: string) => {
        let relatedModels;
        if (modelGroup === "UHome") {
            relatedModels = relatedModelsUHome;
        } else if (modelGroup === "UHC") {
            relatedModels = relatedModelsUHC;
        }
        
        return relatedModels?.map((model) => (
            <Link href={`${model.link}`} key={model.name} className={`${styles.relatedModel} ${lastSegment === model.name ? styles.active__relatedModel : ''}`}>
                <Image src={model.image} alt={model.name} className={styles.small__image} />
                <p>{model.name.split('-')[1]}</p>
            </Link>
        ));
    };

    const content = (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.image__container}>
                    <Image src={props.image} alt={props.description} className={styles.image}/>
                </div>
                <div className={styles.information}>
                    {!isMobile ? (
                        <>
                            <h6 className={styles.title}>{props.name}</h6>
                            <p className={styles.description}>{props.description}</p>
                            <p className={styles.price}>{props.price}</p>
                        </>
                    ): (
                        <>
                            <div className={styles.mobile__title__container}>
                                <h6 className={styles.title}>{props.name}</h6>
                                <p className={styles.price}>{props.price}</p>
                            </div>
                            <p className={styles.description}>{props.description}</p>
                        </>
                    )}
                    <a href="tel:0507771379" className={styles.telephone}>
                        <div className={styles.btn}>Зв’язатися з нами</div>
                    </a>

                    {(props.name.startsWith("UHome") || props.name.startsWith("UHC")) && (
                        <div className={styles.other__models}>
                            <p className={styles.related__title}>Інші моделі</p>
                            <div className={styles.related__block}>
                                {props.name.startsWith("UHome") && showRelatedModels("UHome")}
                                {props.name.startsWith("UHC") && showRelatedModels("UHC")}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )

    if (!isMounted) {
        return null;
    }

    return (
        content
    )
}

export default ProductHead;