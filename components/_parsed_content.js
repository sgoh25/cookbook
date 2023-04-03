import ListElement from '@/components/_list_element.js'

export default function ParsedContent(jsonData) {
    let title, stats, ingr, dirs;
    title = jsonData.Title
    stats = (
        <>
            {jsonData.Statistics.map(element => <p key={element}>{element}</p>)}
        </>
    )
    ingr = (
        <>
            {jsonData.Ingredients.map((element, index) => <ListElement label={element} id={"ingr" + index} key={element} />)}
        </>
    )
    dirs = (
        <>
            {jsonData.Directions.map((element, index) => <ListElement label={element} id={"dirs" + index} key={element} />)}
        </>
    )
    return [title, stats, ingr, dirs]
}
