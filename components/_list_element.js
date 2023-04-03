export default function ListElement({ label }) {
    return (
        <div>
            <input type="checkbox" id="checkbox" />
            <label htmlFor='checkbox'>{label}</label>
        </div>
    )
}