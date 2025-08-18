import { gsap } from "gsap"
import { useEffect, useRef } from "react"

export default function Loader()
{
    const loaderRef = useRef()

    useEffect(() => {
        gsap.to(loaderRef.current, {
            rotate: 180,
            duration: 1.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        })
    }, [])

    return  <section className="loader">
                <img ref={ loaderRef } src="/svg/loader.svg" alt="loader" />
            </section>
}