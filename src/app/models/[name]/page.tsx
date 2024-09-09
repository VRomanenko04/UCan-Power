import React from 'react';
import { products } from '@/products';
import styles from '@/styles/ProductPage.module.scss';
import { StaticImageData } from 'next/image';
import LinksString from '@/components/LinksString/LinksString';
import ProductHead from '@/components/ProductHead/ProductHead';
import ProductPresentation from '@/components/ProductPresentation/ProductPresentation';

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
    price?: string
}


const findProductByName = (name: string): ProductObject | undefined => {
    const decodedName = decodeURIComponent(name);

    // Ищем в массиве ready_solutions
    let product = products.ready_solutions.find(product => product.searchTag === decodedName);
    
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
                <LinksString description={product.description}/>
                <ProductHead 
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    description={product.description}
                />
                <ProductPresentation name={product.name}/>
            </main>
        )
    }
}

export default ProductPage;