'use client'
import React from 'react';
import styles from './jornada.module.css';
import { JornadaSVG } from '@components/svgs/jornada';

const Jornada = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Jornada</h2>
            <p className={styles.desc}>En la universal libre te tenemos a ti, por eso podrás escoger la jornada que mejor te parezca.</p>
            <div className={styles.container2}>
                <h3 className={styles.horario}>HORARIOS:</h3>
                <div className={styles.container3}>
                    <h4 className={styles.horarioItem}>Diurnos</h4>
                    <h4 className={styles.horarioItem}>Nocturnos</h4>
                </div>
            </div>
            <JornadaSVG />
        </div>
    )
}

export { Jornada }