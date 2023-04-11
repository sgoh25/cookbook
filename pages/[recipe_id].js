import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import { ref as ref_db, get } from 'firebase/database'
import { ref as ref_store, getBlob } from 'firebase/storage'
import { database, storage } from "@/firebase"
import styles from '@/styles/Home.module.css'
import Page from '@/components/Page'
import ParsedContent from '@/components/ParsedContent.jsx'

const inter = Inter({ subsets: ['latin'] })

export default function RecipeWrapper() {
  const router = useRouter()
  const { recipe_id } = router.query
  const [hasContent, setHasContent] = useState(false)
  const [title, setTitle] = useState("")
  const [stats, setStats] = useState("")
  const [ingr, setIngr] = useState("")
  const [dirs, setDirs] = useState("")
  const [img, setImg] = useState("")

  useEffect(() => {
    get(ref_db(database, `recipes/${recipe_id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const [t, s, i, d] = ParsedContent(snapshot.val())
        setTitle(t)
        setStats(s)
        setIngr(i)
        setDirs(d)
        setHasContent(true)
      }
    }).catch((e) => {
      console.log(e)
      setHasContent(false)
    })

    getBlob(ref_store(storage, `images/${recipe_id}.jpeg`)).then(
      (file) => setImg(URL.createObjectURL(file))
    ).catch((error) => console.error(error))
  }, [])

  let content = (
    (!hasContent ?
      <div className={styles.no_recipe}>404: Recipe Not Found! ☹️</div>
      : <>
        {img && <div className={styles.thumbnail}>
          <Image className={styles.img_thumbnail} src={img} alt={title} width={300} height={220} />
        </div>}
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
        <div className={styles.recipe_wrapper}>
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
        </div>
        <div className={styles.center}>
          <Link href="/" className={styles.back}>
            <p className={inter.className}><span>&lt;-</span> Back to Home</p>
          </Link>
        </div>
      </>
    )
  )

  return <Page title={title} content={content} state="Recipe" />
}
