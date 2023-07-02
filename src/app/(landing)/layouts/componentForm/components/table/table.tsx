
import React from 'react';
import styles from './table.module.css';

const Table = ({ datos }: { datos: any }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr style={{ padding: 0 }}>
                    <th className={styles.th}>Asignatura</th>
                    <th className={styles.colors}></th>
                    <th className={`${styles.th} ${styles.creditos}`}>Créditos</th>
                </tr>
            </thead>
            <tbody>
                {datos.map((fila: any, index: number) => (
                    <tr key={index} style={{ padding: 0, backgroundColor: index % 2 === 0 ? '#C9C9C9' : '#fff' }}>
                        <td className={styles.td}>{fila.text}</td>
                        <td className={styles.colors}><div className={styles.decoration} style={{ backgroundColor: fila.color }} /></td>
                        <td className={`${styles.td} ${styles.creditos}`}>{fila.creditos}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    )
}

export { Table }