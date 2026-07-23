import './style.scss';
import Button from '../Btn/Button';
import data from '../../data/data.json'

const ProjectCard = ({data}) => {
    console.log(data);
    
    

    return(
        <div className='project-wrap'>
            <img src={data.image} alt="" className="project-image" />
            <p className="project-stack">{data.stack}</p>
            <div className="project-block">
                <h4 className="project-title">{data.projectTitle}</h4>
                <p className="project-desc">{data.projectDesc}</p>
                <Button text="Link" w="110px" h="37px"/>
            </div>
        </div>
    )
}

export default ProjectCard;