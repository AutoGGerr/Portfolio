import About from "../Components/About/About";
import Contacts from "../Components/Contacts/Contacts";
import FirstContact from "../Components/FirstContact/FirstContact";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Info from "../Components/Info/Info";
import PoputFb from "../Components/PopupFb/PopupFb";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";

const MainPage = () => {
    return(
        <main className="main">
            {/* <FirstContact />*/}
            <Info />
            <Projects />
            <Skills />
            <About />
            <Contacts />
            
        </main>
    )
}

export default MainPage;