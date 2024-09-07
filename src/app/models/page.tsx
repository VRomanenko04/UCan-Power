'use client';
import React, { useRef } from 'react';
import styles from './ModelsPage.module.scss';
import ModelsNavigation from '@/components/ModelsNavigation/ModelsNavigation';
import ModelsPageBlock from '@/components/ModelsPageBlock/ModelsPageBlock';


const ModelsPage = () => {
    const invertersRef = useRef<HTMLDivElement | null>(null);
    const batteriesRef = useRef<HTMLDivElement | null>(null);
    const standsRef = useRef<HTMLDivElement | null>(null);
    const solutionsRef = useRef<HTMLDivElement | null>(null);

    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className={styles.wrapper}>
            <h2 className={styles.title}>Модельний ряд</h2>
            <ModelsNavigation 
                scrollTo={scrollToSection}
                invertersRef={invertersRef}
                batteriesRef={batteriesRef}
                standsRef={standsRef}
                solutionsRef={solutionsRef}
            />
            <ModelsPageBlock blockRef={invertersRef} title='Інвертори' tag='Інвертор'/>
            <ModelsPageBlock blockRef={batteriesRef} title='Батареї' tag='Батарея'/>
            <ModelsPageBlock blockRef={standsRef} title='Підставки' tag='Підставка'/>
            <ModelsPageBlock blockRef={solutionsRef} title='Готові рішення' tag='ready_solutions'/>

            {/*
            <BatteriesBlock />
            <StandsBlock />
            <SolutionsBlock /> */}
        </main>
    )
}

export default ModelsPage;