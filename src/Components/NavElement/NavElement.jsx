import './style.scss'

const NavElem = (props) => {
    return(
        <>
            <a className='navelem-a' href='#'><span className='navelem-span'>#</span>{props.text}</a>  
        </>
    )
}

export default NavElem;