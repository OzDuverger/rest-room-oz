import { useContext, useEffect, useRef } from "react"
import { gsap } from "gsap"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Texts
import experiences from "../../texts/animator-experiences.json"

export default function GameMasterExperiences()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)
    
    const expRef = useRef()

    const close = (event) => {
        if (app.focus === "Games") {
            setApp({...app, information: null})
        }
    }

    useEffect(() => {
        const expArray = Array.from(expRef.current.children)
        const tl = gsap.timeline()
        if (app.mobile) {
            expArray.map((exp) => {
                tl.fromTo(exp, {
                    x: "-50px",
                    opacity: 0,
                    ease: "elastic"
                }, {
                    x: "0px",
                    opacity: 1,
                    duration: 1.5,
                    ease: "elastic"
                }
                )
            })
        } else {
            expArray.map((exp) => {
                tl.fromTo(exp, {
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
        }
    }, [])

    return  <section id="animator-experiences">
                <div className="background-section container">
                    <div className="close">
                        <img src="/svg/cross-circle.svg" alt="cross" onClick={ close }/>
                    </div>
                    <div ref={ expRef } className="experience">
                        { experiences.map((exp) => {
                            return (
                                <div className="exp">
                                    <div className="left">
                                        <div className="job">{ exp.job }</div>
                                        <div className="dates">{ exp.dates }</div>
                                    </div>
                                    <ul className="roles">
                                        { exp.roles.map(role => <li key={ role }>{ role }</li>) }
                                    </ul>
                                </div>
                            )
                        }) }
                    </div>
                </div>
            </section>
}