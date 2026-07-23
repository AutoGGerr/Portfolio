import ProjectCard from '../ProjectCard/ProjectCard';
import SectionTitle from '../SectionTitle/SectionTitle';
import dataProjects from '../../data/data.json'
import './style.scss';

const Projects = () => {
    return(
        <div className='projects'>
            <SectionTitle text="проекты" w="550px"/>
            <div className="projects-wrap">
                {dataProjects.map((item, index)=> {
                    return <ProjectCard data={item} key={index}/> 
                })}
               
            </div>
            
        </div>
    )
}

export default Projects;