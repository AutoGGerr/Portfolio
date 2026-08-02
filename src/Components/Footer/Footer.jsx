import './style.scss';
import Logo from '../../assets/svg/Logo.svg'
import Kwork from '../../assets/svg/Kwork.svg';
import Phone from '../../assets/svg/Phone.svg';
import Telegram from '../../assets/svg/Telegram.svg';
import GitHub from '../../assets/svg/GitHub.svg';
import Link from '../Link/Link'
const Footer = () => {
    return(
        <footer className='footer'>
            <span className="footer-line"></span>
            <div className="footer-text">
                <div className="footer-contact">
                    <div>
                        <img src={Logo} alt="" className='footer__logo'/>
                        <p className='footer__email'>autogg228@gmail.com</p>
                    </div>
                    <p className='footer__about'>Веб-дизайнер и фронтенд-разработчик</p>
                </div>
                <div className="footer-contact">
                    <h2 className='footer__contacts-title'>Media</h2>
                    <div className='footer-logos'>
                        <Link image={Telegram} link="https://t.me/+F2V0wVqH3DpiZTI0" />
                        <Link image={GitHub} link="https://github.com/AutoGGerr"/>
                        <Link image={Kwork} link="https://kwork.ru/user/ansizen"/>
                    </div>
                </div>
            </div>
            <h1 className='footer-foot'>© Copyright 2022. Made by Elias</h1>
        </footer>
    )
}

export default Footer;