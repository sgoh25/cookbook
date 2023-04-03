import styles from '@/styles/Home.module.css'
import Card from '@/components/_card.js'
import Page from '@/components/_page'

export default function Home() {
  let content = (
    <>
      <div className={styles.center}>
        <h1>Welcome to my Cookbook!</h1>
      </div>

      <div className={styles.grid}>
        <Card href="/recipes/bagels" label="Bagels" src="/recipe_images/bagels.jpeg" />
        <Card href="/recipes/banana_bread" label="Banana Bread" src="/recipe_images/banana_bread.jpeg" />
        <Card href="/recipes/banana_nut_muffins" label="Banana Nut Muffins" src="/recipe_images/banana_nut_muffins.jpeg" />
        <Card href="/recipes/blueberry_muffins" label="Blueberry Muffins" src="/recipe_images/blueberry_muffins.jpeg" />
        <Card href="/recipes/brownies" label="Brownies" src="/recipe_images/brownies.jpeg" />
        <Card href="/recipes/cookie_cake" label="Chocolate Chip Cookie Cake" src="/recipe_images/cookie_cake.jpeg" />
        <Card href="/recipes/croissants" label="Croissants" src="/recipe_images/croissants.jpeg" />
        <Card href="/recipes/gingersnaps" label="Gingersnaps" src="/recipe_images/gingersnaps.jpeg" />
        <Card href="/recipes/lemon_cheesecake" label="Lemon Cheesecake" src="/recipe_images/lemon_cheesecake.jpeg" />
        <Card href="/recipes/madeleines" label="Madeleines" src="/recipe_images/madeleines.jpeg" />
        <Card href="/recipes/maple_pumpkin_cookies" label="Maple Pumpkin Cookies" src="/recipe_images/maple_pumpkin_cookies.jpeg" />
        <Card href="/recipes/oatmeal_cookies" label="Oatmeal Chocolate Chip Cookies" src="/recipe_images/oatmeal_cookies.jpeg" />
      </div>
    </>
  )

  return <Page title="Cookbook" content={content} />
}
