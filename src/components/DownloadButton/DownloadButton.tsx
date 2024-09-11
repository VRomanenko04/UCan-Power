import React from 'react';
import styles from './DownloadButton.module.scss';
import Image from 'next/image';
import DownloadIcon from '@/assets/download-icon.svg';


const DownloadButton = () => {
    return (
        <a className={styles.link} href="/UcanPower_Hybrid_Products_Datasheet_EN-20240408-U1.pdf" download="UcanPower_Hybrid_Products_Datasheet_EN-20240408-U1.pdf">
            <div className={styles.button}>Скачати UCP_Datasheet <Image className={styles.icon} src={DownloadIcon} alt='Іконка скачування'/></div>
        </a>
    )
}

export default DownloadButton;