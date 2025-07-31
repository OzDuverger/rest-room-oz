import { useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

export default function GameMasterContact()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    const close = (event) => {
        if (app.focus === "Games") {
            setApp({...app, information: null})
        }
    }

    return  <section id="bar-experiences">
                <div className="experiences container">
                    <div className="close" onClick={ close }>X</div>
                    GAME MASTER CONTACT
                </div>
            </section>
}