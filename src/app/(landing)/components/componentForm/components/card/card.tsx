'use client'
import React from 'react';
import styles from './card.module.css';
import { Table } from '../table/table';

const Card = ({ datos, semestre }: { datos: any, semestre: number }) => {
    const datosCompletos = [...datos, ...Array(7 - datos.length).fill({ text: '   ', creditos: '', color: '' })];

    return (
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <h4 className={styles.title}>Semestre {semestre + 1}</h4>
            </div>
            <div className={styles.content}>
                <Table datos={datosCompletos} />
            </div>
        </div>
    )
}

export { Card }