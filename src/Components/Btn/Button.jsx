import './style.scss';

const Button = (props) => {
    return(
        <button ref={props.ref} onClick={props.onClick} className={`button ${props.className || ''}`} style={{...props.style, width: props.w }}>{props.text}</button>
    )
}

export default Button;