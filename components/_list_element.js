export default function ListElement({ label }) {
    return (
        <div>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="strikethrough">{label}</label>
        </div>
    )
}