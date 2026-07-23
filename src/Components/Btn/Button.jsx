import './style.scss';

const Button = (props) => {
    return(
        <button className="button" style={{width: props.w}}>{props.text}</button>
    )
}

export default Button;