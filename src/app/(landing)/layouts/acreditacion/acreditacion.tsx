'use client'
import React from 'react';
import { AcreditacionSvg } from '@components/svgs/acreditacion';
import styles from './acreditacion.module.css';

const AcreditacionLayout = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Acreditación</h2>
            <p className={styles.desc}>Contamos con Acreditación de Alta Calidad Res N° 007709 del 9 de mayo de 2023</p>
            <AcreditacionSvg />
        </div>
    )
}

export { AcreditacionLayout }