import './style.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import Phone from '../../assets/svg/Phone.svg'
import Telegram from '../../assets/svg/Telegram.svg';
import GitHub from '../../assets/svg/GitHub.svg';
import Kwork from '../../assets/svg/Kwork.svg'

const Contacts = () => {
    return(
        <div className='contacts'>
            <SectionTitle text="контакты" w="150px"/>
            <div className="contacts-wrapper">
                <h2 className='contacts-text'>Мы можем сотрудничать как на фриланс бирже, так и в удобном для Вас месседжере.</h2>
                <div className="contacts__table">
                    <h3 className='contacts__table-text'>Связаться со мной</h3>
                    <div className="contacts__table-column">
                        <div className="contacts__table-item">
                            <img src={Telegram} alt="Телеграм" />
                            <h4>@gasize</h4>
                        </div>
                        <div className="contacts__table-item">
                            <img src={Phone} alt="Номер телефона" />
                            <h4>+7(953) 964 17 59</h4>
                        </div>
                        <div className="contacts__table-item">
                            <img src={Kwork} alt="Кворк" />
                            <h4>@ansizen</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;