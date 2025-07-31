import { useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

export default function KnitAndHook()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    const close = (event) => {
        if (app.focus === "Bench") {
            setApp({...app, information: null})
        }
    }

    return  <section id="bar-experiences">
                <div className="experiences container">
                    <div className="close" onClick={ close }>X</div>
                    Knit And Hook
                </div>
            </section>
}