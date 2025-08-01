import { useContext, useEffect, useRef, useState } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Text
import receipes from "../../texts/receipes.json"

export default function Receipes()
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
        if (app.focus === "Barrel") {
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
                        { receipes.map((receipe) => {
                            return (
                                <div key={ receipe.id } className="slide">
                                    <img src={ receipe.img } alt="cocktail-img" />
                                </div>
                            )
                        }) }
                        </div>
                        <div ref={ elements } className="descriptions">
                        { receipes.map((receipe) => {
                            return (
                                <div key={ receipe.id } onClick={ () => setCurrentId(receipe.id) } className="element">
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