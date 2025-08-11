import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Informations({ data, mobile })
{
    const expRef = useRef()

    useEffect(() => {
        const expArray = Array.from(expRef.current.children)
        const tl = gsap.timeline()
        if (mobile) {
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

    return  <div ref={ expRef } className="experience">
                { data.map((exp) => {
                    return (
                        <div key={ exp.id } className="exp">
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
}