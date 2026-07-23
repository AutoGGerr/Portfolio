import './style.scss'

const SkillsTables = (props) => {
    return(
        <article className={`skills__tables ${props.className || ""}` }>
            <h3 className='skills__tables-name'>{props.skillsName}</h3>
            <p className='skills__tables-stack'>{props.skillsStack}</p>
        </article>

    )
}

export default SkillsTables;