const MyButton = (props) => {
    return (
        <div>
            <button onClick={() => props.click()}>{props.kuli} </button>
        </div>
    )
}

export default MyButton;