import Link from 'next/link';
import React from 'react';
import styles from './LinksString.module.scss';


type LinksStringProps = {
    description: string
}

const LinksString = (props: LinksStringProps) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <Link className={styles.link} href='/'>Головна/</Link>
                <Link className={styles.link} href='/models'>Модельний ряд/</Link>
                <p className={styles.text}>{props.description}</p>
            </div>
        </section>
    )
}

export default LinksString;