import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import FirstContact from "./Components/FirstContact/FirstContact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Info from "./Components/Info/Info";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

const App = () => {
    return(
        <main className="main">
            <FirstContact />
            <Header />
            <Info />
            <Projects />
            <Skills />
            <About />
            <Contacts />
            <Footer />
        </main>
    )
}

export default App;