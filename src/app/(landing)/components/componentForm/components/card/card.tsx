
import React from 'react';
import styles from './card.module.css';
import { Table } from '../table/table';

const Card = ({ datos, semestre }: { datos: any, semestre: number }) => {
    const datosCompletos = [...datos, ...Array(7 - datos.length).fill({ text: '   ', creditos: '', color: '' })];

    const totalCreditos = datos.reduce((acumulador, objeto) => {
        const creditos = parseInt(objeto.creditos);
        return acumulador + creditos;
    }, 0);

    return (
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <h4 className={styles.title}>Semestre {semestre + 1}</h4>
            </div>
            <div className={styles.content}>
                <Table datos={datosCompletos} />
                <div className={styles.containerCount}>
                    <h5 className={styles.total}>Total</h5>
                    <span className={styles.creditosTotales}>{totalCreditos}</span>
                </div>
            </div>
        </div>
    )
}

export { Card }