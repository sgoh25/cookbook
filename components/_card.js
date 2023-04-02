import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Card({ href, label, src }) {
    return (
        <>
            <Link href={href} className={styles.card}>
                <h2 className={inter.className}>{label} <span>-&gt;</span></h2>
                <Image src={src} alt={label} width={200} height={150} />
            </Link>
        </>
    )
}