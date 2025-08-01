import { useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Texts
import experiences from "../../texts/bar-experiences.json"

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
                    <div className="experience">
                        { experiences.map((exp) => {
                            return (
                                <div key={ exp.id } className="exp">
                                    <div className="left">
                                        <div className="job">{ exp.job }</div>
                                        <div className="dates">{ exp.dates }</div>
                                    </div>
                                    <ul className="roles">
                                        { exp.roles.map(role => <li>{ role }</li>) }
                                    </ul>
                                </div>
                            )
                        }) }
                    </div>
                </div>
            </section>
}