import React from 'react';
import styles from './ReadySolutionAdvantages.module.scss';
import ModulesIcon from '@/assets/module-icon.svg';
import SearchIcon from '@/assets/search-icon.svg';
import ScalesIcon from '@/assets/scales-icon.svg';
import BatteryIcon from '@/assets/battery-icon.svg';
import ShieldIcon from '@/assets/shield-icon.svg';
import Image from 'next/image';


type Props = {
    name: string
}

const ReadySolutionAdvantages = (props: Props) => {
    return (
        <section className={styles.wrapper}>
            <h3 className={styles.title}>ПЕРЕВАГИ</h3>
            <div className={styles.container}>
                {props.name === 'UHome All in One ESS' && (
                    <>
                        <div>
                            <Image className={styles.icon} src={ModulesIcon} alt='Іконка модулей'/>
                            <p>Проста установка завдяки модульній і багатошаровій конструкції</p>
                        </div>
                        <div>
                            <Image className={styles.icon} src={BatteryIcon} alt='Іконка батареї'/>
                            <p>Гнучке розширення ємності батареї, 5~40 кВт/год</p>
                        </div>
                        <div>
                            <Image className={styles.icon} src={SearchIcon} alt='Іконка пошуку'/>
                            <p>Моніторинг у реальному часі та контроль параметрів через додаток UCANESS</p>
                        </div>
                        <div>
                            <Image className={styles.icon} src={ShieldIcon} alt='Іконка щіта'/>
                            <p>Ступінь захисту IP 65, можливість встановлення всередині та на вулиці</p>
                        </div>
                    </>
                )}
                {props.name === 'UHB 50Ah' && (
                    <>
                        <div>
                            <Image className={styles.icon} src={ModulesIcon} alt='Іконка модулей'/>
                            <p>Проста установка завдяки модульній і багатошаровій конструкції</p>
                        </div>
                        <div>
                            <Image className={styles.icon} src={BatteryIcon} alt='Іконка батареї'/>
                            <p>Гнучке розширення ємності батареї від 7,68 кВт-год до 25,6 кВт-год</p>
                        </div>
                        <div>
                            <Image className={styles.icon} src={SearchIcon} alt='Іконка пошуку'/>
                            <p>Віддалена діагностика та моніторинг даних у реальному часі</p>
                        </div>
                        <div>
                            <Image className={styles.icon} src={ScalesIcon} alt='Іконка ваг'/>
                            <p>Оригінальна технологія активного балансу батареї</p>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default ReadySolutionAdvantages;