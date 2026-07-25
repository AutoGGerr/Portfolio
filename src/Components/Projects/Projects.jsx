import ProjectCard from '../ProjectCard/ProjectCard';
import SectionTitle from '../SectionTitle/SectionTitle';
import dataProjects from '../../data/data.json'
import Button from '../Btn/Button';

import firstProject from '../../assets/portfolio/project1.png'
import secondProject from '../../assets/portfolio/project2.png'
import thirdProject from '../../assets/portfolio/project3.png'

import './style.scss';
import { NavLink } from 'react-router-dom';

const Projects = () => {
    const TEXT_FOR_HTML = '~~>'
    return(
        <div className='projects'>
            <div className="project-sectiontitle">
                <SectionTitle text="проекты" w="550px"/>
                <NavLink to={'/portfolio'} className="project-navlink">Все {TEXT_FOR_HTML}</NavLink>                
            </div>
            
            {/* <div className="projects-wrap">
                {dataProjects.map((item, index)=> {
                    return <ProjectCard data={item} key={index}/> 
                })}
               
            </div> */}
            <div className="projects-wrap">
                <div className='project-wrap'>
                    <img src={firstProject} alt="" className="project-image" />
                    <p className="project-stack">HTML/SCSS JavaScript</p>
                    <div className="project-block">
                        <h4 className="project-title">Тренировочная вёрстка</h4>
                        <p className="project-desc">Вёрстка макета Landing Page из сообщества Figma на ванильном html js, с использованием предпроцессора SCSS/SASS.</p>
                        <Button text="Link" w="110px" h="37px"/>
                    </div>
                </div>
                <div className='project-wrap'>
                    <img src={secondProject} alt="" className="project-image" />
                    <p className="project-stack">HTML SCSS JavaScript Firebase/FireStore</p>
                    <div className="project-block">
                        <h4 className="project-title">Лендинг + Админ-Панель</h4>
                        <p className="project-desc">1. Вёрстка макета Landing Page из сообщества Figma. <br></br>2. Реализация Админ-Панели для редактирования содержимого лендинга.</p>
                        <Button text="Link" w="110px" h="37px"/>
                    </div>
                </div>
                <div className='project-wrap'>
                    <img src={thirdProject} alt="" className="project-image" />
                    <p className="project-stack">HTML/CSS JavaScript</p>
                    <div className="project-block">
                        <h4 className="project-title">Разработка Landing Page</h4>
                        <p className="project-desc">Разработка Landing Page с нуля на ванильном HTML/CSS по просьбе заказщика — диллера автомобилей Mercedes.</p>
                        <Button text="Link" w="110px" h="37px"/>
                    </div>
                </div>
            </div>
    
            
        </div>
    )
}
// https://s6.iimage.su/s/25/g49IyFux8TJaO8TusGWDzjJIT7YkeJj02ksgwWEsT.png - портфолио
// https://s6.iimage.su/s/25/gEe7GZ2xZowAj6osFb5ZWHp1triNfdVgVz6b1T8Qm.png - мерседе
export default Projects;