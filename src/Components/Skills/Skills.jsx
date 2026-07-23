import SectionTitle from '../SectionTitle/SectionTitle';
import SkillsTables from '../SkillsTables/SkillsTables';
import {FirstSquare, ThirdSquare, FourthSquare} from '../Squares/Squares';
import './style.scss';


const Skills = () => {
    return(
        <div className='skills'>
            <SectionTitle text="навыки" w="250px"/>
            <div className='skills-wrapper'>
                <div className="skills-squares">
                    <ThirdSquare top="40px" left="25px" size="63px" />
                    <ThirdSquare top="145px" left="209px" size="63px" />
                    <FirstSquare top="180px" left="30px" size="130px" />
                    <FourthSquare top="10px" left="260px" size="86px" />
                    <FourthSquare top="195px" left="340px" size="52px" />
                    
                </div>
                <div className="skills-stack">
                    <SkillsTables skillsName="Вёрстка" skillsStack="HTML CSS SCSS SASS"/>
                    <SkillsTables skillsName="Фреймворки" skillsStack="React Flutter"/>
                    <SkillsTables className="wide" skillsName="Языки" skillsStack="Python Dart JavaScript"/>
                </div>
            </div>
        </div>
    )
}

export default Skills;