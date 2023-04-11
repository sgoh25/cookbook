import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Page({ title, content, state }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="An interactive cookbook" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fruit.png" />
      </Head>
      <div className={styles.top_wrapper}>
        <div className={styles.logo}>The Bready Bakery</div>
        <div className={styles.top_button_wrapper}>
          {(state == "Create" || state == "Recipe") && <Link href="/" className={styles.create}>
            <p className={inter.className}>Home</p>
          </Link>}
          {(state == "Home" || state == "Recipe") && <Link href="/create" className={styles.create}>
            <p className={inter.className}>Create New</p>
          </Link>}
        </div>
      </div>
      <div className={styles.header}></div>

      <div className={styles.wrapper}>
        <main className={styles.main}>
          {content}
        </main>
      </div>

      <div className={styles.footer}></div>
    </>
  )
}
