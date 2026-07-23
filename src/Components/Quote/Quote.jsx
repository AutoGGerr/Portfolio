import './style.scss';

const Quote = (props) => {
    return(
        <div className='quote'>
            <div className="quote-row" >
                <div className="quote-text">
                    <h4>{props.text}</h4>
                </div>
                <div className="quote-author">
                    <h4>{props.author}</h4>
                </div>
            </div>
        </div>
    )
}

export default Quote;