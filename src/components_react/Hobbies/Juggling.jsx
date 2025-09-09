import { useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Text
import juggling from "../../texts/en/juggling.json"

// Components
import Informations from "../usefull/Informations"

export default function Juggling()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    const close = (event) => {
        if (app.focus === "Shelf") {
            setApp({...app, information: null})
        }
    }

    return  <section id="juggling">
                <div className="background-section container">
                    <div className="close">
                        <img src="/svg/cross-circle.svg" alt="cross" onClick={ close }/>
                    </div>
                    <Informations data={ juggling } mobile={ app.mobile } />
                </div>
            </section>
}