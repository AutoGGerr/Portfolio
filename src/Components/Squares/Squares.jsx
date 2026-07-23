import firstFigure from '../../assets/svg/square_1.svg';
import secondFigure from '../../assets/svg/square_2.svg';
import thirdFigure from '../../assets/svg/square_3.svg';
import fourthFigure from '../../assets/svg/square_4.svg';

import './style.scss';

const FirstSquare = (props) => {
    return(
       <img style={{top: props.top, bottom: props.bottom, right: props.right, left: props.left, zIndex: props.layer, width: props.size, height: props.size}}  className={`square ${props.className || ''}`} src={firstFigure} alt="Фигура" /> 
    )
    
}

const SecondSquare = (props) => {
    return(
       <img style={{top: props.top, bottom: props.bottom, right: props.right, left: props.left, zIndex: props.layer, width: props.size, height: props.size}}  className={`square ${props.className || ''}`} src={secondFigure} alt="Фигура" /> 
    )
    
}

const ThirdSquare = (props) => {
    return(
       <img style={{top: props.top, bottom: props.bottom, right: props.right, left: props.left, zIndex: props.layer, width: props.size, height: props.size}}  className={`square ${props.className || ''}`} src={thirdFigure} alt="Фигура" /> 
    )
    
}

const FourthSquare = (props) => {
    return(
        <img style={{top: props.top, bottom: props.bottom, right: props.right, left: props.left, zIndex: props.layer, width: props.size, height: props.size}}  className={`square ${props.className || ''}`} src={fourthFigure} alt="Фигура" />
    )
}

export {FirstSquare, SecondSquare, ThirdSquare, FourthSquare}