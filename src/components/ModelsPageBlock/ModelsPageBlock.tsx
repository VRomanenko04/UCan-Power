'use client';
import React from 'react';
import styles from './ModelsPageBlock.module.scss';
import { products } from '@/products';
import ProductBlock from '../ProductBlock/ProductBlock';


type ModelsPageBlockProps = {
    blockRef: React.MutableRefObject<HTMLDivElement | null>
    title: string
    tag: string
}

const ModelsPageBlock = (props: ModelsPageBlockProps) => {
    return (
        <div ref={props.blockRef} className={styles.wrapper}>
            <h4 className={styles.title}>{props.title}</h4>
            <div className={styles.container}>
                {props.tag === 'ready_solutions' ? (
                    products.ready_solutions.map((product) => (
                        <div key={product.name}>
                            <ProductBlock 
                                name={product.name}
                                description={product.description}
                                image={product.image}
                            />
                        </div>
                    ))
                ) : (
                    products.modules
                        .filter((product) => product.type === props.tag)
                        .map((product) => (
                            <div key={product.name}>
                                <ProductBlock 
                                    name={product.name}
                                    description={product.description}
                                    image={product.image}
                                    price={product.price}
                                />
                            </div>
                        ))
                )}
            </div>
        </div>
    )
}

export default ModelsPageBlock;