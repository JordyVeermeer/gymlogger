import './custom-button.css';

export const CustomButton = ({label, onclick}) => {

    return (
        <button type="button" className="customButton"
            onClick={onclick ? onclick : null}
        >
            {label}
        </button>
    )
}