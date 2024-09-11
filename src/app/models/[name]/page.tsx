import React from 'react';
import { products } from '@/products';
import styles from '@/styles/ProductPage.module.scss';
import { StaticImageData } from 'next/image';
import LinksString from '@/components/LinksString/LinksString';
import ProductHead from '@/components/ProductHead/ProductHead';
import ProductPresentation from '@/components/ProductPresentation/ProductPresentation';
import ProductCharacteristics from '@/components/ProductCharacteristics/ProductCharacteristics';
import RecommendedProducts from '@/components/RecommendedProducts/RecommendedProducts';
import ReadySolutionHead from '@/components/ReadySolutionHead/ReadySolutionHead';
import ReadySolutionDescription from '@/components/ReadySolutionDescription/ReadySolutionDescription';
import ReadySolutionAdvantages from '@/components/ReadySolutionAdvantages/ReadySolutionAdvantages';

type ProductPageProps = {
    params: {
        name: string
    }
}

type ProductObject = {
    name: string;
    searchTag: string;
    description: string;
    image: StaticImageData;
    price?: string;
    tag?: string;
    type?: string;
    characteristics?: Record<string, string>;
    advantages?: string[];
}


const findProductByName = (name: string): any => {
    const decodedName = decodeURIComponent(name);

    // Ищем в массиве ready_solutions
    let product = products.ready_solutions.find(product => product.searchTag === decodedName) as any;
    
    // Если не найден в ready_solutions, ищем в модулях
    if (!product) {
        product = products.modules.find(product => product.searchTag === decodedName);
    }

    return product;
}


const ProductPage = ({ params: {name} }: ProductPageProps) => {
    const product = findProductByName(name);

    if (product) {
        return (
            <main className={styles.wrapper}>
                {(name === 'UHome-All-in-One-ESS' || name === 'UHB-50Ah') ? (
                    <>
                        <LinksString description={product.description}/>
                        <ReadySolutionHead 
                            name={product.name}
                            image_small={product.image3}
                            image_big={product.image}
                            image_mid={product.image2}
                        />
                        <ReadySolutionDescription name={product.name}/>
                        <ReadySolutionAdvantages name={product.name}/>
                        <RecommendedProducts tag={product.tag}/>
                    </>
                ) : (
                    <>
                        <LinksString description={product.description}/>
                        <ProductHead 
                            name={product.name}
                            image={product.image}
                            price={product.price}
                            description={product.description}
                        />
                        <ProductPresentation name={product.name}/>
                        <ProductCharacteristics searchTag={product.searchTag}/>
                        <RecommendedProducts tag={product.tag}/>
                    </>
                )}
            </main>
        )
    }
}

export default ProductPage;