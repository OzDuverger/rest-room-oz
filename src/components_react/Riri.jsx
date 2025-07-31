import { useEffect, useRef } from "react"
import { gsap, Sine } from "gsap"

export default function Riri(
    {
        canMove,
        nextChat
    }
)
{
    const followerRef = useRef(null)

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
    
    useEffect(() => {
            gsap.to(followerRef.current, {
                width: "30px",
                height: "30px",
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
        document.addEventListener("click", nextChat)
        document.addEventListener("touchmove", moveFollower)
    }, [canMove])

    return  <div id="riri" ref={ followerRef } >
            </div>
}