import { useContext, useState, useRef, useEffect } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Text
import activities from "../../texts/activities.json"

export default function Activities()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    // Ref
    const carousel = useRef()
    const elements = useRef()

    // Id
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        getElement()
    }, [currentId])

    const close = (event) => {
        if (app.focus === "Games") {
            setApp({...app, information: null})
        }
    }

    const getElement = () => {
        const carouselMap = Array.from(carousel.current.children)
        carouselMap.map((child, index) => {
            if (index === currentId) {
                child.classList.add("active")
            } else {
                child.classList.remove("active")
            }
        })

        const elementsMap = Array.from(elements.current.children)
        elementsMap.map((child, index) => {
            if (index === currentId) {
                child.classList.add("active")
            } else {
                child.classList.remove("active")
            }
        })
    }

    return  <section id="receipes">
                <div className="background-section container">
                    <div className="close">
                        <img src="/svg/cross-circle.svg" alt="cross" onClick={ close }/>
                    </div>
                    <div className="illustrated-work">
                        <div ref={ carousel } className="caroussel">
                        { activities.map((activitie) => {
                            return (
                                <div key={ activitie.id } className="slide">
                                    <img src={ activitie.img } alt="cocktail-img" />
                                </div>
                            )
                        }) }
                        </div>
                        <div ref={ elements } className="descriptions">
                        { activities.map((activitie) => {
                            return (
                                <div key={ activitie.id } onClick={ () => setCurrentId(activitie.id) } className="element">
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