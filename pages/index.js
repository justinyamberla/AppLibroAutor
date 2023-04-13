import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.container} data-bs-theme="dark">

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Bienvenido a la App: <span style={{color: '#58FF01FF'}}>Autores-Libros</span>
                </h1>
                <br/>
                <br/>
                <h2>¿Qué desea hacer?: </h2>

                <div className={styles.grid}>
                    <Link href="/autor/" className={styles.card}>
                        <h2>Gestionar Autores &rarr;</h2>
                        <p>Cree, edite o elimine un Autor para luego gestionar sus respectivos Libros.</p>
                    </Link>
                    <Link href="/autor/" className={styles.card}>
                        <h2>Gestionar Libros &rarr;</h2>
                        <p>Cree, edite o elimine un Libro de cualquier Autor</p>
                    </Link>
                </div>
            </main>

        </div>
    )
}
