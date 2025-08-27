import { useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Texts
import experiences from "../../texts/bar-experiences.json"

// Components
import Informations from "../usefull/Informations"

export default function BarExperiences()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    const close = (event) => {
        if (app.focus === "Barrel") {
            setApp({...app, information: null})
        }
    }

    return  <section id="bar-experiences">
                <div className="background-section container">
                    <div className="close">
                        <img src="/svg/cross-circle.svg" alt="cross" onClick={ close }/>
                    </div>
                    <a class="link" href="/cv/cv_oz_duverger-bartender.pdf" download="cv_oz_duverger-bartender.pdf">Download my CV !</a>
                    <Informations data={ experiences } mobile={ app.mobile } />
                </div>
            </section>
}