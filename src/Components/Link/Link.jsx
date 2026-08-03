import './style.scss';

const Link = (props) => {
    return(
        <div className='link'>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img style={{width: props.size, height: props.size}} src={props.image} alt="link" />
            </a>        
        </div>

    )
}

export default Link;