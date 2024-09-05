import React from 'react';
import styles from './HomeAdvantages.module.scss';


const HomeAdvantages = () => {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>ПЕРЕВАГИ UCANPOWER</h2>
            <div className={styles.container}>
                <div className={styles.item}>
                    <h3>МОДУЛЬНА СИСТЕМА</h3>
                </div>
                <div className={styles.item}>
                    <h3>ВИСОКА НАДІЙНІСТЬ</h3>
                </div>
                <div className={styles.item}>
                    <h3>ЛЕГКІСТЬ У ВИКОРИСТАННІ </h3>
                </div>
                <div className={styles.item}>
                    <h3>МОНІТОРИНГ У РЕАЛЬНОМУ ЧАСІ ЧЕРЕЗ ДОДАТОК</h3>
                </div>
            </div>
        </section>
    )
}

export default HomeAdvantages;