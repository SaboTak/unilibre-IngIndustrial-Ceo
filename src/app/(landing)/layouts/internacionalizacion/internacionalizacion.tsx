'use client'
import React from 'react';
import styles from './internacionalizacion.module.css';
import ReactPlayer from 'react-player'

const InternacionalizacionLayout = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Internacionalización</h2>
            <p className={styles.desc}>Actualmente, el programa de Ingeniería Industrial de la Universidad Libre cuenta con programas de doble titulación con las entidades universitarias Art Et Métiers y École centrale de Nantes en Francia.</p>
            {/* <ReactPlayer url='./videro1.mp4' /> */}
            <div className={styles.videoContent}>
                <div className={styles.videoContent2}>
                    <video controls width={300}>
                        <source src="/video1.mp4" type="video/mp4" />
                    </video>
                    <video controls width={300}>
                        <source src="/video2.mp4" type="video/mp4" />
                    </video>
                </div>
                <video controls width={640}>
                    <source src="/video3.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export { InternacionalizacionLayout }