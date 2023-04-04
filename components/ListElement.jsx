export default function ListElement({ label, id }) {
    return (
        <div>
            <input type="checkbox" id={id} />
            <label htmlFor={id} className="strikethrough">{label}</label>
        </div>
    )
}