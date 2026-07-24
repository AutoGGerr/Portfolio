import './style.scss'
import Logo from '../../assets/svg/Logo.svg';
import NavElem from '../NavElement/NavElement';

const Header = () => {

    
    return(
        <header className='header'>
            <div className="header-wrap">
                <img className="header__logo" src={Logo}></img>
                
                <nav className='header__nav'>
                    <NavElem text="главная" route="/" className='nav-elem'/>
                    <NavElem text="портфолио" route="/portfolio" className='nav-elem'/>
                    <NavElem text="обо мне" route="/about" className='nav-elem'/>
                    <NavElem text="контакты" route="/contacts" className='nav-elem'/>
                </nav>

            </div>
        </header>
    )


}

export default Header;