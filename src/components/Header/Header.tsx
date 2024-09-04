import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';


const Header = () => {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.logo} href='/'>Logo</Link>
            <ul className={styles.list}>
                <li><Link className={styles.link} href='/'>МОДЕЛЬНИЙ РЯД</Link></li>
                <li><Link className={styles.link} href='/'>НАШІ КОНТАКТИ</Link></li>
            </ul>
        </nav>
    )
}

export default Header;