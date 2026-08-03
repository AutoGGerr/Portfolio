import './style.scss'
import Logo from '../../assets/svg/Logo.svg';
import NavElem from '../NavElement/NavElement';
import Burger from '../Burger/Burger';
import { useRef, useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const burgerIcon = useRef(null)
    
    return(
        <header className='header'>
            <div className="header-wrap">
                <img className="header__logo" src={Logo}></img>
                
                <nav className='header__nav'>
                    <NavElem text="главная" route="/" className='nav-elem'/>
                    <NavElem text="портфолио" route="/portfolio" className='nav-elem'/>
                    <NavElem text="обо мне" route="/about" className='nav-elem'/>
                </nav>

                <div className="burger-icon ">
                    <span className='burger-span'></span>
                    <span className='burger-span'></span>
                    <span className='burger-span'></span>
                </div>

            </div>
            
        </header>
    )


}

export default Header;