// import About from "./Components/About/About";
// import Contacts from "./Components/Contacts/Contacts";
// import FirstContact from "./Components/FirstContact/FirstContact";
// import Footer from "./Components/Footer/Footer";

// import Info from "./Components/Info/Info";
// import Projects from "./Components/Projects/Projects";
// import Skills from "./Components/Skills/Skills";

// const App = () => {
//     return(
//         <main className="main">
//             <FirstContact />
//             <Header />
//             <Info />
//             <Projects />
//             <Skills />
//             <About />
//             <Contacts />
//             <Footer />
//         </main>
//     )
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import PortfolioPage from "./pages/PortfolioPage";
import FirstContact from "./Components/FirstContact/FirstContact";



function App() {
    return(
        <> 
            <main className="main">
                <FirstContact />
                <Header />
                
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/about" element={<AboutPage/>} />
                    <Route path="/portfolio" element={<PortfolioPage/>} />
                    <Route path="/contacts" element={<ContactsPage/>} />
                </Routes>                
            </main>
            
        </>
        
    )
}

export default App;