import './checkbox.css'

function CheckBox({id}) {
    return (
        <div className="round">
            <input type="checkbox" id={id} />
            <label htmlFor={id}></label>
        </div>
    )
}
export default CheckBox;