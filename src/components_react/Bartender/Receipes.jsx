import { useContext, useEffect, useState } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Text
import english from "../../texts/en/receipes.json"
import french from "../../texts/fr/receipes.json"

// Components
import Illustrated from "../usefull/Illustrated"

export default function Receipes()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    // Receipes var
    const [receipes, setReceipes] = useState(english)
    useEffect(() => {
        if (app.french) {
            setReceipes(french)
        } else {
            setReceipes(english)
        }
    }, [])

    const close = (event) => {
        if (app.focus === "Barrel") {
            setApp({...app, information: null})
        }
    }

    return  <section id="receipes">
                <div className="background-section container">
                    <div className="close">
                        <img src="/svg/cross-circle.svg" alt="cross" onClick={ close }/>
                    </div>
                    <Illustrated data={ receipes } mobile={ app.mobile } />
                </div>
            </section>
}