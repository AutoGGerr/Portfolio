import PageTitle from '../PageTitle/PageTitle'
import PhotoMe2 from '../../assets/me/photoMe2.png'
import SkillsTables from '../SkillsTables/SkillsTables';
import SectionTitle from '../SectionTitle/SectionTitle';
import { SecondSquare, ThirdSquare } from '../Squares/Squares';

import './style.scss'

const AboutMe = () => {
    return(
        <div className="aboutme">
            <PageTitle title="обо мне" desc="Кто я?"/>

            <div className='aboutme-row'>
                <div className="aboutme-text">
                    <div className="about-text">
                        <p>Доброго всем дня</p>
                        <p>Меня зовут Дмитрий, я веб-разработчик, специализирован по frontend-части сайта/веб-сервиса. Я помогаю бизнесам и стартапам запускать собственные сайты.</p>
                        <p>Мне 20 лет, обучаюсь в ВУЗе на 2м курсе, люблю создавать и помогать людям. Нашел себя в IT-сфере в 12 лет: разрабатывал простых ботов на Python и верстал сайты. В 17 осознанно решил посвятить этому свою жизнь, и теперь вы читаете этот текст. </p>
                    </div>``
                    <div className='aboutme__image-block'>
                        <img src={PhotoMe2} alt="" className='aboutme-image'/>
                        <span className="about-line aboutme-line"></span>
                    </div>
                    <ThirdSquare right="260px" top="180px" size="70px"/>
                    <SecondSquare right="120px" bottom="170px"/>
                </div>

                <div className="aboutme-skills">
                    <SectionTitle text="навыки"/>
                    <div className="aboutme-skills--block">
                        <SkillsTables skillsName="Языки программирования" skillsStack="JavaScript/JSX TypeScript Python Dart"/>
                        <SkillsTables skillsName="Вёрстка" skillsStack="HTML CSS SCSS SASS"/>
                        <SkillsTables skillsName="Коммуникация" skillsStack="Git GitHub GitLab"/>
                        <SkillsTables skillsName="Фреймворки" skillsStack="React Flutter"/>
                        <SkillsTables skillsName="Дизайн" skillsStack="Figma Photoshop "/>
                        <SkillsTables skillsName="Другое" skillsStack="API FireBase Tailwind"/>                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutMe;