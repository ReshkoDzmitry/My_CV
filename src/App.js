import './App.css';
import Header from "./components/header/Header";
import Greetings from "./components/greetings/Greetings";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import {useState} from "react";
import {Main} from "./components/main/Main";


function App() {
    const [lang, setState] = useState(true)
    const [theme, setTheme] = useState(true)

    return (
        <div>
                <div className="container">
                    <Main lang={lang} theme={theme}/>
                    <Header lang={lang} setState={setState} theme={theme} setTheme={setTheme}/>
                    <Greetings lang={lang} theme={theme}/>
                    <Skills lang={lang} theme={theme}/>
                    <Projects lang={lang} theme={theme}/>
                    <Form lang={lang} theme={theme}/>
                    <Footer lang={lang} theme={theme}/>
                </div>
        </div>
);
}

export default App;
