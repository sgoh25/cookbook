import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Page({ title, content }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="An interactive cookbook" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fruit.png" />
      </Head>
      <div className={styles.logo}>The Bready Bakery</div>
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
