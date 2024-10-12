import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Logo from '@/assets/UCANPOVER_COLORED_LOGO.svg';
import TelephoneIconBlack from '@/assets/Telephone_icon_black.svg';
import Link from 'next/link';


const Footer = () => {
    return (
        <footer className={styles.container}>
            <Link href='/'>
                <Image className={styles.logo} src={Logo} alt='UCan Power colored logo'/>
            </Link>
            <div className={styles.info}>
                <a className={`${styles.link} ${styles.telephone__link}`} href="tel:0507771379"><Image className={styles.telephone} src={TelephoneIconBlack} alt='Телефон '/>0507771379 </a>
                <a className={styles.link} href="mailto:ucanpower@ukr.net">ucanpower@ukr.net</a>
                <p>м.Харків, вул.Клочківська 174</p>
            </div>
        </footer>
    )
}

export default Footer;