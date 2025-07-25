import { useEffect, useRef } from "react"
import { gsap } from "gsap"

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
            gsap.to(followerRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.6,
                ease: "power3"
            })
        }
    }

    useEffect(() => {

        document.addEventListener("mousemove", moveFollower)
        document.addEventListener("click", nextChat)
    }, [canMove])

    return  <div id="riri" ref={ followerRef } >
            </div>
}