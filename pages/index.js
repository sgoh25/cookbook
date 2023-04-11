import { useEffect, useState } from "react"
import { ref as ref_db, get } from 'firebase/database'
import { ref as ref_store, getBlob, listAll } from 'firebase/storage'
import { database, storage } from "@/firebase"
import styles from '@/styles/Home.module.css'
import Card from '@/components/Card.jsx'
import Page from '@/components/Page'

export default function Home() {
  const [cards, setCards] = useState([])
  const [status, setStatus] = useState("Loading")

  useEffect(() => {
    get(ref_db(database, "recipes")).then((snapshot) => {
      if (snapshot.exists()) {
        let keys = []
        let card_dict = {}
        listAll(ref_store(storage, `images/`)).then((res) => {
          res.items.forEach((itemRef) => {
            let key = itemRef.name.replace(".jpeg", "")
            keys = [...keys, key].sort()
            getBlob(itemRef).then((file) => {
              card_dict = {
                ...card_dict,
                [key]: <Card href={"/" + key} label={GetLabel(key)} src={URL.createObjectURL(file)} key={key} />
              }
              if (keys.length == Object.keys(card_dict).length) {
                setCards(keys.map((k) => card_dict[k]))
                setStatus("Loaded")
              }
            })
          })
        }).catch((error) => console.log(error))
      }
      else {
        console.log("No data available")
      }
    }).catch((error) => {
      console.error(error)
    })
  }, [status])

  let content
  if (status == "Loaded") {
    content = (
      <>
        <div className={styles.center}>
          <h1>Welcome to my Cookbook!</h1>
        </div>

        <div className={styles.grid}>
          {cards}
        </div>
      </>
    )
  }
  else {
    content = <div className={styles.loading}>Loading...</div>
  }

  return <Page title="Cookbook" content={content} state="Home" />
}

function GetLabel(name) {
  let words = name.split("_")
  return words.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  }).join(" ");
}
