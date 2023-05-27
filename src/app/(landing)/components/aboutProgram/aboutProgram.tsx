'use client'
import React from 'react'
import { SubTitle } from '../subTitle/subTitle';
import styles from './aboutProgram.module.css'

const AboutProgram = () => {
  return (
    <section className={styles.container}>
      <SubTitle text="SOBRE EL PROGRAMA" />
      <h3 className={styles.h3}>Misión</h3>
      <p className={styles.desc}>Formar ingenieros industriales líderes para la transformación del sector productivo de la Región Caribe y del país, con cualidades éticas, sensibles a la preservación y equilibrio del medio ambiente, a la identidad nacional y regional, capaces de comprender e influenciar en su entorno social y económico globalizado, promoviendo la libertad, la tolerancia, el pluralismo ideológico y el respeto por la diversidad del país.</p>

      <h3 className={styles.h3}>Visión</h3>
      <p className={styles.desc}>Ser un programa académico de alta calidad, reconocido por su aporte a la transformación social, desarrolloorganizacional sostenible, avance tecnológico e innovación,a nivel nacional y global, de acuerdo con los principios filosóficos y éticos institucionales.</p>
    </section>
  )
}

export { AboutProgram }