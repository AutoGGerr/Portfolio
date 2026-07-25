import './style.scss'

const PageTitle = (props) => {
    return(
        <div className='pagetitle'>
            <div className="pagetitle-column">
                <h1 className='pagetitle-title'><span>/</span>{props.title}</h1>
                <p className='pagetitle-desc'>{props.desc}</p>
            </div>
        </div>
    )
}

export default PageTitle;
