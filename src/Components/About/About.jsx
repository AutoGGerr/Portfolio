import './style.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import PhotoMe2 from '../../assets/me/PhotoMe2.png'
import {SecondSquare, ThirdSquare} from '../Squares/Squares';

const About = () => {
    return(
        <div className='about'>
            <SectionTitle text="обо мне" w="400px"/>
            <div className="about-wrapper">
                <div className="about-text">
                    <p>Доброго всем дня</p>
                    <p>Меня зовут Дмитрий, я веб-разработчик, специализирован по frontend-части сайта/веб-сервиса. Я помогаю бизнесам и стартапам запускать собственные сайты.</p>
                    <p>Мне 20 лет, обучаюсь в ВУЗе на 2м курсе, люблю создавать и помогать людям. Нашел себя в IT-сфере в 12 лет: разрабатывал простых ботов на Python и верстал сайты. В 17 осознанно решил посвятить этому свою жизнь, и теперь вы читаете этот текст. </p>
                </div>
                <div className="about-me">
                    <img src={PhotoMe2} alt="" className='about-photo'/>
                    <span className="about-line"></span>
                    <SecondSquare right="30px" top="250px" size="80px"/>
                    <ThirdSquare left="75px" top="140px" size="55px"/>
                </div>
            </div>
        </div>
    )
}

export default About;