'use client';
import React, { useRef } from 'react';
import ModelsNavigation from './ModelsNavigation/ModelsNavigation';
import ModelsPageBlock from './ModelsPageBlock/ModelsPageBlock';


const ModelsPageContainer = () => {
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
        <>
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
        </>
    )
}

export default ModelsPageContainer;