import { useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Text
import activities from "../../texts/activities.json"

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
                    <div className="illustrated-work">
                        <div className="caroussel">
                        { activities.map((activitie) => {
                            return (
                                <div className="slide">
                                    <img src={ activitie.img } alt="cocktail-img" />
                                </div>
                            )
                        }) }
                        </div>
                        <div className="descriptions">
                        { activities.map((activitie) => {
                            return (
                                <div className="element">
                                    <div className="title">{ activitie.title }</div>
                                    <div className="desc">{ activitie.description }</div>
                                </div>
                            )
                        }) }
                        </div>
                    </div>
                </div>
            </section>
}