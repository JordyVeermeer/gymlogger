
export const CustomSelect = ({ options }) => {

    return <select className="custom-select">
        {
            options instanceof Array && options.length > 1 && 
            options.map((opt) => (
                <option>{opt}</option>
            ))
        }
    </select>
}