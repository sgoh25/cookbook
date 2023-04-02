import Head from 'next/head'
import Link from 'next/link';
import styles from '@/styles/Home.module.css'

export default function Recipe() {
    return (
        <>
            <Head>
                <title>Recipe1</title>
                <meta name="description" content="An interactive cookbook" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/cat1.png" />
            </Head>

            <main className={styles.main}>
                <div className={styles.center}>
                    <h1>Banana Bread</h1>
                </div>
                <Link href="/">Back to Home</Link>
            </main>
        </>
    )
}
