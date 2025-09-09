import { useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Text
import activities from "../../texts/en/activities.json"

// Components
import Illustrated from "../usefull/Illustrated"

export default function Activities()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    const close = (event) => {
        if (app.focus === "Games") {
            setApp({...app, information: null})
        }
    }

    return  <section id="receipes">
                <div className="background-section container">
                    <div className="close">
                        <img src="/svg/cross-circle.svg" alt="cross" onClick={ close }/>
                    </div>
                    <Illustrated data={ activities } mobile={ app.mobile } />
                </div>
            </section>
}