import { AboutProgram } from "./components/aboutProgram/aboutProgram";
import { ComponentForm } from "./components/componentForm/componentForm";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Pensum } from "./components/pensum/pensum";
import { SubTitle } from "./components/subTitle/subTitle";
import styles from './styles/landing.module.css';

export default function Landing() {
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

                <SubTitle text="SOBRE EL PROGRAMA" />

                <ComponentForm />

                <Footer />

            </article>
        </main>
    )
}
