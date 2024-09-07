'use client';
import React from 'react';
import styles from './ModelsNavigation.module.scss';

type ModelsNavigationProps = {
    scrollTo: (sectionRef: React.RefObject<HTMLDivElement>) => void
    invertersRef: React.MutableRefObject<HTMLDivElement | null>
    batteriesRef: React.MutableRefObject<HTMLDivElement | null>
    standsRef: React.MutableRefObject<HTMLDivElement | null>
    solutionsRef: React.MutableRefObject<HTMLDivElement | null>
}

const ModelsNavigation = ({ scrollTo, invertersRef, batteriesRef, standsRef, solutionsRef }: ModelsNavigationProps) => {
    return (
        <nav className={styles.container}>
            <div onClick={() => scrollTo(invertersRef)}>
                <p>Інвертори</p>
            </div>
            <div onClick={() => scrollTo(batteriesRef)}>
                <p>Батареї</p>
            </div>
            <div onClick={() => scrollTo(standsRef)}>
                <p>Підставки</p>
            </div>
            <div onClick={() => scrollTo(solutionsRef)}>
                <p>Готові рішення</p>
            </div>
        </nav>
    )
}

export default ModelsNavigation;