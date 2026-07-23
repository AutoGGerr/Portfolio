import './style.scss'
import Logo from '../../assets/svg/Logo.svg';
import NavElem from '../NavElement/NavElement';

const Header = () => {
    return(
        <header className='header'>
            <div className="header-wrap">
                <img className="header__logo" src={Logo}></img>
                
                <nav className='header__nav'>
                    <NavElem text="главная"/>
                    <NavElem text="портфолио"/>
                    <NavElem text="обо мне"/>
                    <NavElem text="контакты"/>
                </nav>


            </div>
        </header>
    )
}

export default Header;