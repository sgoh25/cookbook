import Head from 'next/head'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Recipe({ title, contents }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="An interactive cookbook" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/fruit.png" />
            </Head>

            <main className={styles.main}>
                <div className={styles.center}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.center}>
                    {contents}
                </div>
                <div className={styles.center}>
                    <Link href="/" className={styles.back}>
                        <p className={inter.className}><span>&lt;-</span> Back to Home</p>
                    </Link>
                </div>
            </main>
        </>
    )
}
