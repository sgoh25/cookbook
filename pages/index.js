import { useEffect, useState } from "react"
import { ref as ref_db, get } from 'firebase/database'
import { ref as ref_store, getBlob } from 'firebase/storage'
import { database, storage } from "@/firebase"
import styles from '@/styles/Home.module.css'
import Card from '@/components/Card.jsx'
import Page from '@/components/Page'

export default function Home() {
  let [cards, setCards] = useState([])
  useEffect(() => {
    get(ref_db(database, "recipes")).then((snapshot) => {
      if (snapshot.exists()) {
        let keys = Object.keys(snapshot.val())
        keys.length != cards.length && setCards([])
        if (keys.length > cards.length) {
          keys.map((key) => {
            getBlob(ref_store(storage, `images/${key}.jpeg`)).then((file) => setCards(
              [...cards, <Card href={"/" + key} label={GetLabel(key)} src={URL.createObjectURL(file)} key={key} />]
            ))
          })
        }
      }
      else {
        console.log("No data available")
      }
    }).catch((error) => console.error(error))
  }, [])

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

  return <Page title="Cookbook" content={content} state="Home" />
}

function GetLabel(name) {
  let words = name.split("_")
  return words.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  }).join(" ");
}
