import './style.scss'
import { NavLink, useNavigate } from 'react-router-dom';

const NavElem = (props) => {
    const navigate = useNavigate();

    return(
        <>
        <NavLink 
            to={props.route}

            className={({ isActive }) => `navelem-a ${props.className || ''} ${isActive ? 'link__active' : ''}`}
            href=''
        >            
            <span className='navelem-span'>#</span>
            {props.text}             
        </NavLink>
            
        </>
    )
}

export default NavElem;