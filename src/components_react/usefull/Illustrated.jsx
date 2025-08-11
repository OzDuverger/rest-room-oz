import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export default function Illustrated({ data, mobile })
{
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

    return  <div className="illustrated-work">
                <div ref={ carousel } className="caroussel">
                { data.map((el) => {
                    return (
                        <div key={ el.id } className="slide">
                            <img src={ el.img } alt={ el.title } />
                        </div>
                    )
                }) }
                </div>
                <div ref={ elements } className="descriptions">
                { data.map((el) => {
                    return (
                        <div key={ el.id } onClick={ () => setCurrentId(el.id) } className="element">
                            <div className="title">{ el.title }</div>
                            <div className="desc">{ el.description }</div>
                        </div>
                    )
                }) }
                </div>
            </div>
}