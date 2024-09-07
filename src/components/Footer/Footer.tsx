import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Logo from '@/assets/UCANPOVER_COLORED_LOGO.svg';
import Link from 'next/link';


const Footer = () => {
    return (
        <footer className={styles.container}>
            <Link href='/'>
            <Image className={styles.logo} src={Logo} alt='UCan Power colored logo'/>
            </Link>
            <div></div>
        </footer>
    )
}

export default Footer;