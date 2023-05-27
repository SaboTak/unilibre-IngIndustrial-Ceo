
import React from 'react'
import styles from './subTitle.module.css';

const SubTitle = ({ text }: { text: string }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.text}>{text}</h2>
        </div>
    )
}

export { SubTitle }