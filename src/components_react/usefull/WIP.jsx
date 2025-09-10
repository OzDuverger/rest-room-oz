import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { append } from "three/tsl"

export default function WIP({ mobile })
{
    // Ref
    const wipRef = useRef()

    useEffect(() => {
        if (mobile) {
            gsap.to(wipRef.current, {
                fontSize: "2rem",
                letterSpacing: "10px",
                duration: 1.5,
                ease: "power1.in",
                repeat: -1,
                yoyo: true
            }, 0)
        } else {
            gsap.to(wipRef.current, {
                fontSize: "2.5rem",
                letterSpacing: "15px",
                duration: 1.5,
                ease: "power1.in",
                repeat: -1,
                yoyo: true
            }, 0)
        }
    }, [])

    return  <div ref={ wipRef } className="wip">
                { app.french ? "En cours" : "Work In Progress" }
            </div>
}