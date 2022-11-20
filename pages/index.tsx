import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Wordpress FrontEnd</title>
                <meta name="description" content="Woo commerce login page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                   Spy.Roberto &rarr;
                </h1>

                <div className={styles.grid}>

                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Store Font &rarr;</h2>
                        <p>Take a peak at our latest items</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Mechanical &rarr;</h2>
                        <p></p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/master/examples"
                        className={styles.card}
                    >
                        <h2>Examples &rarr;</h2>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h2>Deploy &rarr;</h2>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </a>
                </div>
            </main>
        </Layout>
    )
}
