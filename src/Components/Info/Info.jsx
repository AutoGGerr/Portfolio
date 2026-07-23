import Button from '../Btn/Button'
import PhotoMe from '../../assets/me/photoMe.png'
import {SecondSquare, FirstSquare, ThirdSquare, FourthSquare} from '../Squares/Squares';
import Quote from '../Quote/Quote'

import './style.scss'


const Info = () => {
    return(
        <main className='info'>
            <div className="info-wrapper">
                <div className="info__right">
                    <h1 className='info__right-title'>Дмитрий — <br></br>frontend developer</h1>
                    <p className='info__right-desc'>Создам продающий веб-сайт для бизнеса, сверстаю Ваш макет либо внесу правки в frontend-часть Вашего веб-сервиса.</p>
                    <Button text="Связаться со мной" w='200px'/>
                </div>
                <div className="info__left">
                    <img src={PhotoMe} alt="Моё фото" style={{zIndex: 10}} />
                    <div className="info__left-block">
                        <h2 className='info__left-desc'>Реализую любую Вашу идею</h2>
                    </div>
                    <FirstSquare top="30px" left="-100px"/>   
                    <ThirdSquare bottom="100px" right="-40px" size="70px"/>
                </div>
                <FourthSquare right="-20px" bottom="200px" size="91px"/>
            </div>
            <Quote className="quote" text="Прежде всего решайте проблему. Затем пишите код." author="- Джон Джонсон"/>
        </main>
    )
}

export default Info