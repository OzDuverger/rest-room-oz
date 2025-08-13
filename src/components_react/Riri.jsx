import { useEffect, useRef, useState, useContext } from "react"
import { gsap, Sine } from "gsap"

// Context
import { AppContext, AppSetterContext } from "../context/AppContext"

export default function Riri()
{
    // Get app context
    const setApp = useContext(AppSetterContext)
    const app = useContext(AppContext)

    const followerRef = useRef(null)

    const [canMove, setCanMove] = useState(false)

    // Riri follows you
    const moveFollower = (e) => {
        if (canMove === true) {
            if (e.type === "mousemove") {
                gsap.to(followerRef.current, {
                    top: e.clientY,
                    left: e.clientX,
                    duration: 0.6,
                    ease: "power3"
                }, 0)
            } else if (e.type === "touchmove") {
                gsap.to(followerRef.current, {
                    top: e.touches[0].clientY,
                    left: e.touches[0].clientX,
                    duration: 0.6,
                    ease: "power3"
                }, 0)
            }
        }
    }
    
    // Riri's dance
    useEffect(() => {
            gsap.to(followerRef.current, {
                width: "40px",
                height: "40px",
                duration: 1.5,
                ease: "power1.in",
                repeat: -1,
                yoyo: true
            }, 0)
            gsap.to(followerRef.current, {
                y: 30,
                duration: 1.2,
                ease: Sine.easeInOut,
                repeat: -1,
                yoyo: true
            })
            gsap.to(followerRef.current, {
                x: 30,
                duration: 1,
                ease: Sine.easeInOut,
                repeat: -1,
                yoyo: true
            }).progress(0.5)
    }, [])

    useEffect(() => {

        document.addEventListener("mousemove", moveFollower)
        document.addEventListener("touchmove", moveFollower)
    }, [canMove])

    return  <div id="riri" ref={ followerRef } onClick={ () => {    if (app.presentation === 8 && app.nextAction) {
                                                                        setApp({...app, presentation: app.presentation + 1, nextAction: false})
                                                                        setCanMove(true)
                                                                    }
                                                                } }>
            </div>
}