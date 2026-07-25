import Button from '../Btn/Button';
import closeSvg from '../../assets/svg/close.svg'

import './style.scss';

const PopupFb = (props) => {
    if(!props.isOpen) return null;

    return(
        <main className={`popfb ${props.className || ''}`} >
            <div className="popfb-wrapper">
                <div className="popfb-row">
                    <input type="text" className="popfg-input" placeholder='Name' />
                    <input type="text" className="popfg-input " placeholder='Email'/>
                </div>
                <input type="text" className="popfg-input" placeholder='Title'/>
                <textarea type="text" className="popfg-input popfg-input--message" placeholder='Message'/>
            </div>
            <div className="popfb-button">
                <Button text="Отправить" w="120px"/>
                <img src={closeSvg} alt="" className='popfb-button--close' onClick={props.onClose}/>             
            </div>
        </main>
    )
}

export default PopupFb;