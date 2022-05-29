import './App.css';
import Header from "./components/header/Header";
import Greetings from "./components/greetings/Greetings";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import {useEffect, useState} from "react";
import {Main} from "./components/main/Main";
import ScrollBtn from "./components/scrollBtn/ScrollBtn";


function App() {
    const [lang, setState] = useState(true)
    const [theme, setTheme] = useState(true)

    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    return (
        <div>
            <div className="container">
                {scroll > document.documentElement.clientHeight && <ScrollBtn/>}
                <Main lang={lang} theme={theme}/>
                <Header lang={lang} setState={setState} theme={theme} setTheme={setTheme}/>
                <Greetings lang={lang} theme={theme}/>
                <Skills lang={lang} theme={theme}/>
                <Projects lang={lang} theme={theme}/>
                {/*<Footer lang={lang} theme={theme}/>*/}
            </div>
        </div>
    );
}

export default App