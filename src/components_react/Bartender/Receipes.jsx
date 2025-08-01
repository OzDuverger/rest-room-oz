import { useContext, use } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Text
import receipes from "../../texts/receipes.json"

export default function Receipes()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

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
                    <div className="illustrated-work">
                        <div className="caroussel">
                        { receipes.map((receipe) => {
                            return (
                                <div className="slide">
                                    <img src={ receipe.img } alt="cocktail-img" />
                                </div>
                            )
                        }) }
                        </div>
                        <div className="descriptions">
                        { receipes.map((receipe) => {
                            return (
                                <div className="element">
                                    <div className="title">{ receipe.title }</div>
                                    <div className="desc">{ receipe.description }</div>
                                </div>
                            )
                        }) }
                        </div>
                    </div>
                </div>
            </section>
}