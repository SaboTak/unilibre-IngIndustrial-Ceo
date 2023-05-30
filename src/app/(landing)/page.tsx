'use client'
import { useState } from "react";
import { AboutProgram } from "./components/aboutProgram/aboutProgram";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Pensum } from "./components/pensum/pensum";
import { ComponentForm } from "./layouts/componentForm/componentForm";
import styles from './styles/landing.module.css';
import { NavBar } from "@components/index";
import { AcreditacionLayout } from "./layouts/acreditacion/acreditacion";
import { Jornada } from "./layouts/jornada/jornada";
import { InternacionalizacionLayout } from "./layouts/internacionalizacion/internacionalizacion";

export default function Landing() {
    const [selected, setSelected] = useState(0);

    const LoadLayout = () => {
        switch (selected) {
            case 0:
                return <ComponentForm />
            case 1:
                return <AcreditacionLayout />
            case 2:
                return <InternacionalizacionLayout />
            case 3:
                return <Jornada />
            default:
                return <></>
        }
    }
    return (
        <main>
            <Header />
            <article className={styles.container}>

                <h1 className={styles.titleText}>
                    PROGRAMA DE
                    <br />
                    <span className={styles.industrial}>INGENIERÍA INDUSTRIAL</span>
                </h1>

                <Pensum />
                <AboutProgram />

                <NavBar selected={selected} setSelected={setSelected} />
                <LoadLayout />
                <Footer />
            </article>
        </main>
    )
}
