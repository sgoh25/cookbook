import Recipe from '@/components/_recipe.js'
import ParsedContent from '@/components/_parsed_content.js'
import dataFile from '@/public/recipe_json/gingersnaps.json'

export default function Gingersnaps() {
    let jsonData = JSON.parse(JSON.stringify(dataFile))
    const [title, stats, ingr, dirs] = ParsedContent(jsonData);
    const img = "/recipe_images/gingersnaps.jpeg";

    return <Recipe title={title} src={img} stats={stats} ingr={ingr} dirs={dirs} />
}
