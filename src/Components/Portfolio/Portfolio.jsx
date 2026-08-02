import PageTitle from '../PageTitle/PageTitle'
import SectionTitle from '../SectionTitle/SectionTitle';
import ProjectCard from '../ProjectCard/ProjectCard'

import dataProjects from '../../data/projects.json'
import './style.scss'

const Portfolio = () => {
    return(
        <div className='portfolio'>
            <PageTitle title="портфолио" desc="Мои работы"/>
            <div className="first-projects">
                <div className="projects-wrap">
                  {dataProjects.map((item, index)=> {
                        return <ProjectCard data={item} key={index}/> 
                    })}
                
                </div>
            </div>
        </div>
    )
}

export default Portfolio;