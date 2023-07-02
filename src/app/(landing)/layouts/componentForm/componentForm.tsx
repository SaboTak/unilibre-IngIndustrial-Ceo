'use client'
import React from 'react'
import styles from './componentForm.module.css';
import { Item } from './components/item/item';
import { Card } from './components/card/card';

const ComponentForm = () => {

    const list = [
        { text: 'Básico', color: '#FFB8B8' },
        { text: 'Profesional', color: '#B6AFDC' },
        { text: 'Optativo', color: '#E0C984' },
        { text: 'Humanístico', color: '#86BC46' },
        { text: 'Electivo', color: '#FFC417' },
    ]

    const datos = [
        [
            { text: 'Introduccion a la ingenieria', creditos: 2, color: '#FFB8B8' },
            { text: 'Expresion grafica para ingenieria', creditos: 3, color: '#FFB8B8' },
            { text: 'Calculo diferencial', creditos: 3, color: '#FFB8B8' },
            { text: 'Quimica general y laboratorio', creditos: 3, color: '#FFB8B8' },
            { text: 'Competencias de aprendizaje y comunicacion', creditos: 3, color: '#FFB8B8' },
            { text: 'Catedra unilibrista', creditos: 1, color: '#86BC46' },
            { text: 'Logica y algoritmos', creditos: 3, color: '#FFB8B8' },
        ],
        [
            { text: 'Cálculo integral', creditos: 3, color: '#FFB8B8' },
            { text: 'Física mecánica y laboratorio', creditos: 3, color: '#FFB8B8' },
            { text: 'Álgebra lineal', creditos: 3, color: '#FFB8B8' },
            { text: 'Ciencia de los materiales en la industria', creditos: 2, color: '#FFB8B8' },
            { text: 'Lenguaje de programación', creditos: 3, color: '#FFB8B8' },
            { text: 'Contabilidad y presupuestos', creditos: 2, color: '#B6AFDC' },
            { text: 'Electiva I', creditos: 2, color: '#FFC417' },
        ],
        [
            { text: 'Cálculo multivariado y vectorial', creditos: 3, color: '#FFB8B8' },
            { text: 'Electricidad, magnetismo y laboratorio', creditos: 3, color: '#FFB8B8' },
            { text: 'Gestión Organizacional', creditos: 2, color: '#B6AFDC' },
            { text: 'Probabilidad y estadística descriptiva', creditos: 3, color: '#B6AFDC' },
            { text: 'Diseño en ingeniería', creditos: 2, color: '#B6AFDC' },
            { text: 'Electiva II', creditos: 2, color: '#B6AFDC' },
            { text: 'Fundamentos de economía', creditos: 3, color: '#B6AFDC' },
        ],
        [
            { text: 'Ecuaciones diferenciales', creditos: 3, color: '#FFB8B8' },
            { text: 'Termodinámica', creditos: 3, color: '#FFB8B8' },
            { text: 'Gerencia estratégica', creditos: 3, color: '#B6AFDC' },
            { text: 'Control estadístico de calidad', creditos: 3, color: '#B6AFDC' },
            { text: 'Procesos industriales', creditos: 3, color: '#B6AFDC' },
            { text: 'Costos de operación', creditos: 3, color: '#B6AFDC' },
        ],
        [
            { text: 'Investigación operativa I', creditos: 3, color: '#B6AFDC' },
            { text: 'Sistemas integrados de gestión', creditos: 2, color: '#B6AFDC' },
            { text: 'Diseño de productos y servicios', creditos: 3, color: '#B6AFDC' },
            { text: 'Ingeniería de métodos', creditos: 3, color: '#B6AFDC' },
            { text: 'Ingeniería económica', creditos: 3, color: '#B6AFDC' },
            { text: 'Cátedra Catedra de sostenibilidad', creditos: 2, color: '#86BC46' },
            { text: 'Electiva III', creditos: 2, color: '#FFC417' },
        ],
        [
            { text: 'Finanzas', creditos: 3, color: '#B6AFDC' },
            { text: 'Investigación Operativa II', creditos: 3, color: '#B6AFDC' },
            { text: 'Planeación y control de la producción y operaciones', creditos: 3, color: '#B6AFDC' },
            { text: 'Mercadeo', creditos: 3, color: '#B6AFDC' },
            { text: 'Optativa I', creditos: 3, color: '#B6AFDC' },
            { text: 'Gestión de Tecnología', creditos: 3, color: '#E0C984' },
        ],
        [
            { text: 'Modelos matemáticos estocásticos', creditos: 3, color: '#B6AFDC' },
            { text: 'Seguridad y salud en el trabajo', creditos: 2, color: '#B6AFDC' },
            { text: 'Formulación y evaluación de proyectos', creditos: 3, color: '#B6AFDC' },
            { text: 'Optativa II', creditos: 3, color: '#E0C984' },
            { text: 'Constitución Política', creditos: 2, color: '#86BC46' },
            { text: 'Metodología de la Investigación', creditos: 3, color: '#FFB8B8' },
            { text: 'Ética', creditos: 2, color: '#86BC46' },
        ],
        [
            { text: 'Diseño de instalaciones industriales y de servicios', creditos: 3, color: '#B6AFDC' },
            { text: 'Logística y cadena de suministro', creditos: 3, color: '#B6AFDC' },
            { text: 'Ingeniería aplicada', creditos: 3, color: '#B6AFDC' },
            { text: 'Optativa III', creditos: 3, color: '#E0C984' },
            { text: 'Simulación de procesos', creditos: 3, color: '#B6AFDC' },
            { text: 'Práctica empresarial', creditos: 3, color: '#B6AFDC' },
        ]
    ]

    return (
        <section className={styles.container}>


            <div className={styles.cards}>
                {datos.map((data: any, idx: number) => (
                    <Card datos={data} semestre={idx} key={idx} />
                ))}
            </div>

            <h3 className={styles.title}>COMPONENTES DE FORMACIÓN</h3>

            <ul className={styles.list}>
                {list.map((item: any, idx: number) => (
                    <Item item={item} key={idx} />
                ))}
            </ul>

            <div className={styles.containerTotal}>
                <h4 className={styles.total}>Total de créditos del programa </h4><span className={styles.credits}>144</span>
            </div>

        </section >
    )
}

export { ComponentForm }