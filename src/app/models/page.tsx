import React from 'react';
import styles from './ModelsPage.module.scss';
import ModelsPageContainer from '@/components/ModelsPageContainer';


const ModelsPage = () => {

    return (
        <main className={styles.wrapper}>
            <h2 className={styles.title}>Модельний ряд</h2>
            <ModelsPageContainer />
        </main>
    )
}

export default ModelsPage;