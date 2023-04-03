import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Card from '@/components/_card.js'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cookbook</title>
        <meta name="description" content="An interactive cookbook" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fruit.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>Welcome to my Cookbook!</h1>
        </div>

        <div className={styles.grid}>
          <Card href="/recipes/banana_bread" label="Banana Bread" src="/recipe_images/banana_bread.jpeg" />
          <Card href="/recipes/banana_bread" label="Blueberry Muffins" src="/recipe_images/blueberry_muffins.jpeg" />
          <Card href="/recipes/banana_bread" label="Croissants" src="/recipe_images/croissants.jpeg" />
          <Card href="/recipes/banana_bread" label="Gingersnaps" src="/recipe_images/gingersnaps.jpeg" />
          <Card href="/recipes/banana_bread" label="Melon Bread" src="/recipe_images/melon_bread.jpeg" />
          <Card href="/recipes/banana_bread" label="Oatmeal Chocolate Chip Cookies" src="/recipe_images/oatmeal_cookies.jpeg" />
        </div>
      </main>
    </>
  )
}
