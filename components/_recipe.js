import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Page from '@/components/_page'

const inter = Inter({ subsets: ['latin'] })

export default function Recipe({ title, src, stats, ingr, dirs }) {
    let content = (
        <>
            <div className={styles.thumbnail}>
                <Image src={src} alt={title} width={300} height={220} />
            </div>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
            <div className={styles.left}>
                <h2>Statistics</h2>
                {stats}
            </div>
            <div className={styles.ingr}>
                <h2>Ingredients</h2>
                {ingr}
            </div>
            <div className={styles.dirs}>
                <h2>Directions</h2>
                {dirs}
            </div>
            <div className={styles.center}>
                <Link href="/" className={styles.back}>
                    <p className={inter.className}><span>&lt;-</span> Back to Home</p>
                </Link>
            </div>
        </>
    )

    return <Page title={title} content={content} />
}
