import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ref as ref_db, set } from 'firebase/database'
import { ref as ref_store, uploadBytes } from 'firebase/storage'
import { database, storage } from '@/firebase'
import styles from '@/styles/Home.module.css'
import Page from '@/components/Page'

export default function Create() {
  const router = useRouter()
  const [error, setError] = useState(null)
  const [recipeForm, setRecipeForm] = useState({
    title: "",
    statistics: "",
    ingredients: "",
    directions: "",
  })
  const [image, setImage] = useState(null)

  function handleChange(event) {
    const { value, name } = event.target
    setRecipeForm(prevNote => ({
      ...prevNote, [name]: value
    })
    )
  }

  function handleForm() {
    let recipe_id = recipeForm.title.toLowerCase().replace(" ", "_")
    let file_name = `${recipe_id}.jpeg`
    try {
      Object.keys(recipeForm).forEach((key) => {
        recipeForm[key] = convertToList(key, recipeForm[key])
        if (recipeForm[key] == "") { throw `${capFirst(key)} cannot be empty!` }
      })
      set(ref_db(database, "recipes/"), { [recipe_id]: recipeForm }).then(() =>
        console.log(`Recipe added: ${recipe_id}`)
      )
      const myNewFile = new File([image], `${file_name}`, { type: image.type })
      uploadBytes(ref_store(storage, `images/${file_name}`), myNewFile).then(() =>
        console.log(`Image added: ${file_name}`)
      )
      setError(null)
      router.push('/')
    }
    catch (e) {
      setError(e)
      console.error(e)
    }

    setRecipeForm(({
      title: "",
      statistics: "",
      ingredients: "",
      directions: "",
    }))
    setImage(null)
  }

  let content = (
    <>
      <form>
        <div className={styles.create_wrapper}>
          <div className={styles.title}>
            <h1>Create New Recipe</h1>
          </div>
          <div className={styles.label}>Title:</div>
          <input type="text" onChange={handleChange} placeholder="Title" name="title"
            text={recipeForm.title} value={recipeForm.title}></input>

          <div className={styles.label}>Statistics:</div>
          <textarea onChange={handleChange} placeholder="Statistics" name="statistics"
            text={recipeForm.statistics} value={recipeForm.statistics}></textarea>

          <div className={styles.label}>Ingredients:</div>
          <textarea onChange={handleChange} placeholder="Ingredients" name="ingredients"
            text={recipeForm.ingredients} value={recipeForm.ingredients}></textarea>

          <div className={styles.label}>Directions:</div>
          <textarea onChange={handleChange} placeholder="Directions" name="directions"
            text={recipeForm.directions} value={recipeForm.directions}></textarea>

          <input type="file" className={styles.label} name="image"
            onChange={(event) => setImage(event.target.files[0])} />
          {error != null && <div className={styles.error}>{error}</div>}
          <div className={styles.submit_button}>
            <button type="button" className={styles.button} onClick={handleForm}>Submit</button>
            <button type="button" className={styles.cancel} onClick={() => router.push('/')}>Cancel</button>
          </div>
        </div>
      </form>
    </>
  )

  return <Page title="Create" content={content} state="Create" />
}

function convertToList(key, value) {
  if (key == "title") {
    return value
  }
  let val_list = value.split("\n")
  if (val_list[val_list.length - 1] == "") {
    return val_list.slice(0, -1)
  }
  return val_list
}

function capFirst(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}