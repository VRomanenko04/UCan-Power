import React from 'react';
import styles from './ReadySolutionDescription.module.scss';
import Image from 'next/image';
import UHome_image from '@/assets/UHome_presentation.svg';
import UHB_image from '@/assets/UHB_presentation.svg';

type Props = {
    name: string
}

const ReadySolutionDescription = (props: Props) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                {props.name === 'UHome All in One ESS' && <p className={styles.text}><strong>UHome All in One</strong> — це готове рішення для накопичення сонячної та електричної енергії, яке об’єднує інвертор, зарядний пристрій, джерело безперебійного живлення та батарею в підготовлену до встановлення систему для більш простого та швидкого встановлення, що скорочує час встановлення до 50%.</p>}
                {props.name === 'UHB 50Ah' && <p className={styles.text}><strong>UHB-50Ah</strong> — це високовольтна батарея, яка пропонує кілька варіантів накопичення енергії завдяки розширюваній модульній конструкції що спрощує установку, експлуатацію та технічне обслуговування за допомогою кількох розумних функцій.</p>}
                <a className={styles.telephone} href="tel:0507771379">
                    <div className={styles.btn}>Зв’язатися з нами</div>
                </a>
            </div>
            <div className={styles.presentation__container}>
                {props.name === 'UHome All in One ESS' && <Image className={styles.image} src={UHome_image} alt='UHome презентаційне фото'/>}
                {props.name === 'UHB 50Ah' && <Image className={styles.image} src={UHB_image} alt='UHB презентаційне фото'/>}
            </div>
        </section>
    )
}

export default ReadySolutionDescription;