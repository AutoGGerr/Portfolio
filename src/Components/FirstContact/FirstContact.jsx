import './style.scss';
import Link from '../Link/Link';
import Telegram from '../../assets/svg/Telegram.svg';
import GitHub from '../../assets/svg/GitHub.svg';
import Kwork from '../../assets/svg/Kwork.svg'

const FirstContact = () => {
    return(
        <div className='contact'>
            <div className="contact-row">
                <span className='line'></span>
                <Link image={Telegram} link="https://t.me/+F2V0wVqH3DpiZTI0" />
                <Link image={GitHub} link="https://github.com/AutoGGerr"/>
                <Link image={Kwork} link="https://kwork.ru/user/ansizen"/>                
            </div>

        </div>
    )
}

export default FirstContact;