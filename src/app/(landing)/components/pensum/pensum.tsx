
import React from 'react'
import { SubTitle } from '../subTitle/subTitle'
import styles from './pensum.module.css';

const Pensum = () => {
    return (
        <section className={styles.container}>
            <SubTitle text="P/8 SEMESTRES" />
            <ul className={styles.list}>
                <li className={styles.item}>Código SNIES: 4382</li>
                <li className={styles.item}>Resolución 011554 del 23 de junio de 2022 vigencia 7 años</li>
                <li className={`${styles.item} ${styles.bold}`}>Con Acreditación de Alta Calidad Res N° 007709 del 9 de mayo de 2023</li>
                <li className={styles.item}>Créditos Académicos: 144 créditos</li>
                <li className={styles.item}>Título que otorga: Ingeniero Industrial</li>
                <li className={styles.item}>Nivel de Formación: Profesional</li>
                <li className={styles.item}>Duración: 8 Semestres</li>
                <li className={styles.item}>Jornada: Diurna y Nocturna </li>
                <li className={styles.item}>Modalidad: Presencial</li>
                <li className={styles.item}>Valor de matrícula 2023: $4.670.000,00</li>
            </ul>
        </section>

    )
}

export { Pensum }