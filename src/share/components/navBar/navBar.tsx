'use client'
import React, { useState } from 'react';
import styles from './navBar.module.css';

const NavBar = ({ selected, setSelected }: { selected: number, setSelected: (idx: number) => void }) => {

    const data = [
        "Pensum",
        "Acreditación",
        "Internacionalización",
        "Jornada",
    ];

    return (
        <ul className={styles.container}>
            {data.map((item: any, idx: number) => (
                <li
                    key={idx}
                    className={`${styles.item} ${selected === idx && styles.selected}`}
                    style={{ marginRight: data.length - 1 === idx ? 0 : 24 }}
                    onClick={() => setSelected(idx)}
                >{item}</li>
            ))}
        </ul>
    )
}

export { NavBar }