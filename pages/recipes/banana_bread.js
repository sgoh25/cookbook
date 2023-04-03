import ListElement from '../../components/_list_element.js'
import Recipe from '../../components/_recipe.js'

export default function BananaBread() {
    let stats, ingr, dirs;
    stats = (
        <>
            <p>Statistic 1</p>
            <p>Statistic 2</p>
        </>
    )
    ingr = (
        <>
            <ListElement label="Ingredient1" />
            <ListElement label="Ingredient2" />
        </>
    )
    dirs = (
        <>
            <ListElement label="1. Direction1" />
            <ListElement label="2. Direction2" />
        </>
    )

    return <Recipe title="Banana Bread" src="/recipe_images/banana_bread.jpeg" stats={stats} ingr={ingr} dirs={dirs} />
}
