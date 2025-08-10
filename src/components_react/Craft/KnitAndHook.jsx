import { useContext, useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Text
import receipes from "../../texts/receipes.json"

export default function KnitAndHook()
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

    useEffect(() => {
        const carouselMap = Array.from(carousel.current.children)
        const elementsMap = Array.from(elements.current.children)

        const tl1 = gsap.timeline()
        const tl2 = gsap.timeline()

        elementsMap.map((el) => {
            tl1.fromTo(el, {
                    x: "-50px",
                    opacity: 0,
                    ease: "elastic"
                }, {
                    x: "50px",
                    opacity: 1,
                    duration: 1.5,
                    ease: "elastic"
                }
            )
        })
        
        carouselMap.map((el) => {
            if (el.classList.contains("active")) {
                tl2.fromTo(el, {
                        x: "-50px",
                        opacity: 0,
                        ease: "elastic"
                    }, {
                        x: "50px",
                        opacity: 1,
                        duration: 1.5,
                        ease: "elastic"
                    }
                )
            }
        })
    }, [])
    
    const close = (event) => {
        if (app.focus === "Bench") {
            setApp({...app, information: null})
        }
    }

    const getElement = () => {
        getImage()

        const elementsMap = Array.from(elements.current.children)
        elementsMap.map((child, index) => {
            if (index === currentId) {
                child.classList.add("active")
                child.firstChild.classList.add("active")
            } else {
                child.classList.remove("active")
                child.firstChild.classList.remove("active")
            }
        })
    }

    const getImage = () => {

        const carouselMap = Array.from(carousel.current.children)
        carouselMap.map((child, index) => {
            if (index === currentId) {
                child.classList.add("active")
                gsap.fromTo(child, {
                        x: "-50px",
                        opacity: 0,
                        ease: "elastic"
                    }, {
                        x: "50px",
                        opacity: 1,
                        duration: 1.5,
                        ease: "elastic"
                    }
                )
            } else {
                if (child.classList.contains("active")) {
                    child.classList.remove("active")
                    gsap.fromTo(child, {
                            x: "50px",
                            opacity: 1
                        }, {
                            x: "-50px",
                            opacity: 0,
                            duration: .5
                        }
                    )
                }
            }
        })
    }

    return  <section id="knit-and-hook">
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