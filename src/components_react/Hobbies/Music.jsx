import { useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Text
import music from "../../texts/en/music.json"

// Components
import Informations from "../usefull/Informations"

export default function Music()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    const close = (event) => {
        if (app.focus === "Shelf") {
            setApp({...app, information: null})
        }
    }

    return  <section id="music">
                <div className="background-section container">
                    <div className="close">
                        <img src="/svg/cross-circle.svg" alt="cross" onClick={ close }/>
                    </div>
                    <Informations data={ music } mobile={ app.mobile } />
                </div>
            </section>
}