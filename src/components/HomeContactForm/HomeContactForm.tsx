'use client';
import React from 'react';
import styles from './HomeContactForm.module.scss';
import { useForm } from 'react-hook-form';

interface IContactForm {
    clientName: string
    phoneNumber: number
    email: string
    message: string
}

const HomeContactForm = () => {

    const { register, handleSubmit } = useForm<IContactForm>();

    const onSubmit = (data: IContactForm) => {
        console.log(data);
    }

    return (
        <section className={styles.container}>
            <h4 className={styles.title}>ЗВ’ЯЗАТИСЬ З НАМИ</h4>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputs__container}>
                    <div className={styles.input__block}>
                        <label htmlFor="name">ІМ’Я</label>
                        <input type="text" id='name' {...register('clientName', {
                            required: "Це поле обов'язкове"
                        })}/>
                    </div>
                    <div className={styles.input__block}>
                        <label htmlFor="phone">ТЕЛЕФОН</label>
                        <input type="text" id='phone' {...register('phoneNumber', {
                            required: "Це поле обов'язкове"
                        })}/>
                    </div>
                    <div className={styles.input__block}>
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" id='email' {...register('email', {
                            required: "Це поле обов'язкове"
                        })}/>
                    </div>
                </div>
                <div className={styles.textarea__block}>
                    <label htmlFor="message">ПОВІДОМЛЕННЯ</label>
                    <textarea id="message" {...register('message', {
                            required: "Це поле обов'язкове"
                        })}/>
                </div>
                <button className={styles.btn} type='submit'>НАДІСЛАТИ</button>
            </form>
        </section>
    )
}

export default HomeContactForm;