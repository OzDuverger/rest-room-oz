import { useEffect, useRef } from "react"
import { gsap, Sine } from "gsap"

// DEBUG !!!!
// WIP
// DEBUG !!!!
export default function WIP()
{
    // Ref
    const wipRef = useRef()

    useEffect(() => {
        gsap.to(wipRef.current, {
            width: "40px",
            height: "40px",
            duration: 1.5,
            ease: "power1.in",
            repeat: -1,
            yoyo: true
        }, 0)
    }, [])

    return  <div ref={ wipRef } className="wip">
                Work In Progress
            </div>
}