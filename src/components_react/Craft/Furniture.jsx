import { useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Text
// import receipes from "../../texts/en/receipes.json"

// Components
import WIP from "../usefull/WIP"

export default function Furniture()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    const close = (event) => {
        if (app.focus === "Bench") {
            setApp({...app, information: null})
        }
    }
    
    return  <section id="furniture">
                <div className="background-section container">
                    <div className="close">
                        <img src="/svg/cross-circle.svg" alt="cross" onClick={ close }/>
                    </div>
                    <WIP mobile={ app.mobile }/>
                </div>
            </section>
}