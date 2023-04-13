import '../styles/globals.css'
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Home from "./index";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />


            <footer className={styles.footer}>
                <p>
                    Powered by {' '}
                    <span style={{color: '#58FF01FF', fontStyle: 'italic', fontWeight: 'bold'}}>
                        falconFREAKS<span style={{fontSize: 18}}>®</span> Studios
                    </span>
                </p>
            </footer>
        </>
    )
}

export default MyApp
