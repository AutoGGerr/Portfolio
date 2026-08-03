import './style.scss'
import NavElem from '../NavElement/NavElement';
import Link from '../Link/Link'
import Telegram from '../../assets/svg/Telegram.svg'
import GitHub from '../../assets/svg/GitHub.svg'
import Kwork from '../../assets/svg/Kwork.svg'

const Burger = () => {
    return(
        <div className="burger">
            <nav className='burger-nav'>
                <NavElem text="главная" route="/" className='nav-elem burger-item'/>
                <NavElem text="портфолио" route="/portfolio" className='nav-elem burger-item'/>
                <NavElem text="обо мне" route="/about" className='nav-elem burger-item'/>
            </nav>
            <div className="burger-contacts">
                <Link size="80px" image={Telegram} link="https://t.me/+F2V0wVqH3DpiZTI0" />
                <Link size="80px" image={GitHub} link="https://github.com/AutoGGerr"/>
                <Link size="80px" image={Kwork} link="https://kwork.ru/user/ansizen"/>                
            </div>
        </div>
    )
}

export default Burger;