import ListElement from '@/components/ListElement.jsx'

export default function ParsedContent(jsonData) {
    let title, stats, ingr, dirs;
    title = jsonData.title
    stats = (
        <>
            {jsonData.statistics.map(element => <p key={element}>{element}</p>)}
        </>
    )
    ingr = (
        <>
            {jsonData.ingredients.map((element, index) => <ListElement label={element} id={"ingr" + index} key={element} />)}
        </>
    )
    dirs = (
        <>
            {jsonData.directions.map((element, index) => <ListElement label={element} id={"dirs" + index} key={element} />)}
        </>
    )
    return [title, stats, ingr, dirs]
}
