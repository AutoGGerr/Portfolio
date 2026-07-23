import './style.scss';

const SectionTitle = (props) => {
    return(
        <div className='sectiontitle-wrap'>
            <h2 className='seciontitle-title'><span className='seciontitle-span'>#</span>{props.text}</h2>            
            <span className='sectiontitle-line' style={{width: props.w}}></span>
        </div>
    )
}

export default SectionTitle;