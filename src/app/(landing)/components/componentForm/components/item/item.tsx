
import React from 'react'
import styles from './item.module.css'

const Item = ({ item }: { item: { text: string, color: string } }) => {
    return (
        <li className={styles.item}> <div className={styles.decoration} style={{ backgroundColor: item.color }} />{item.text}</li>
    )
}

export { Item }