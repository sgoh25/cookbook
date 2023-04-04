import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'
import Page from '@/components/Page'
import ParsedContent from '@/components/ParsedContent.jsx'
import dataFile from '@/public/recipes.json'

const inter = Inter({ subsets: ['latin'] })

export default function RecipeWrapper() {
    const router = useRouter()
    const { recipe_id } = router.query

    if (!(recipe_id in dataFile)) {
        return (<div className={styles.no_recipe}>404: Recipe Not Found! ☹️</div>)
    }

    let jsonData = JSON.parse(JSON.stringify(dataFile[recipe_id]))
    const [title, stats, ingr, dirs] = ParsedContent(jsonData);
    const img = `/recipe_images/${recipe_id}.jpeg`;

    let content = (
        <>
            <div className={styles.thumbnail}>
                <Image src={img} alt={title} width={300} height={220} />
            </div>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
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
            <div className={styles.center}>
                <Link href="/" className={styles.back}>
                    <p className={inter.className}><span>&lt;-</span> Back to Home</p>
                </Link>
            </div>
        </>
    )

    return <Page title={title} content={content} />
}
