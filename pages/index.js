import styles from '@/styles/Home.module.css'
import Card from '@/components/Card.jsx'
import Page from '@/components/Page'
import dataFile from '@/public/recipes.json'

export default function Home() {
  let jsonData = JSON.parse(JSON.stringify(dataFile))
  let cards = (
    <>
      {Object.keys(jsonData).map((name) => <Card href={"/" + name} label={GetLabel(name)} src={"/recipe_images/" + name + ".jpeg"} key={name} />)}
    </>
  )

  let content = (
    <>
      <div className={styles.center}>
        <h1>Welcome to my Cookbook!</h1>
      </div>

      <div className={styles.grid}>
        {cards}
      </div>
    </>
  )

  return <Page title="Cookbook" content={content} />
}

function GetLabel(name) {
  let words = name.split("_")
  return words.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  }).join(" ");
}
