'use client';
import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Logo_bw from '@/assets/UCANPOVER_B&W_LOGO.svg';
import Logo_color from '@/assets/UCANPOVER_COLORED_LOGO.svg';
import TelephoneIcon from '@/assets/Telephone_icon.svg';
import TelephoneIconBlack from '@/assets/Telephone_icon_black.svg';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    return (
        <nav className={styles.navbar}>
            <Link className={styles.logo} href='/'>
                <Image src={pathname === '/' ? Logo_bw : Logo_color} alt='ucan power logo'/>
            </Link>
            <ul className={styles.list}>
                <li><Link className={`${pathname === '/' ? styles.link : styles.black__link} ${pathname === '/models' ? styles.active : ''}`} href='/models'>МОДЕЛЬНИЙ РЯД</Link></li>
                <li className={styles.telephone__container}>
                    <Image src={pathname === '/' ? TelephoneIcon: TelephoneIconBlack} alt='telephone icon'/>
                    <a className={pathname === '/' ? styles.telephone: styles.telephone__black} href="tel:0507771379">0507771379</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header;