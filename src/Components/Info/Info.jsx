import Button from '../Btn/Button'
import PhotoMe from '../../assets/me/photoMe.png'
import PopupFb from '../PopupFb/PopupFb';
import {SecondSquare, FirstSquare, ThirdSquare, FourthSquare} from '../Squares/Squares';
import Quote from '../Quote/Quote'

import { useState, useRef } from 'react';
import './style.scss'


const Info = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    const buttonColored = useRef(false)
    const buttonRef = useRef(null)

    const closePopup = () => setIsOpen(false)

    const buttonClick = () => {
        if(!buttonRef.current) return;

        buttonColored.current = !buttonColored.current

        buttonRef.current.style.backgroundColor = buttonColored.current ? '#C778DD' : 'transparent'
    }
     
    return(
        <main className='info'>
            <div className="info-wrapper">
                <div className="info__right">
                    <h1 className='info__right-title'>Дмитрий — <br></br>frontend developer</h1>
                    <p className='info__right-desc'>Создам продающий веб-сайт для бизнеса, сверстаю Ваш макет либо внесу правки в frontend-часть Вашего веб-сервиса.</p>
                    <div className="popup-wrapper">
                        <Button ref={buttonRef} className={`popup-openBtn ${isOpen ? 'active' : '' || ''}` } text="Связаться со мной" w='200px' onClick={
                            () => {setIsOpen(prev => !prev)}
                            
                            }/>
                        <PopupFb className="info-popup" isOpen={isOpen} onClose={closePopup} />
                    </div>

                </div>
                <div className="info__left">
                    <img src={PhotoMe} alt="Моё фото" style={{zIndex: 10}} />
                    <div className="info__left-block">
                        <h2 className='info__left-desc'>Реализую любую Вашу идею</h2>
                    </div>
                    <FirstSquare className="me-square--first" top="30px" left="-100px"/>   
                    <ThirdSquare className="me-square--first" bottom="100px" right="-40px" size="70px"/>
                </div>
                <FourthSquare className="info-square" right="-20px" bottom="200px" size="91px"/>
            </div>
            <Quote className="quote" text="Прежде всего решайте проблему. Затем пишите код." author="- Джон Джонсон"/>
        </main>
    )
}

export default Info