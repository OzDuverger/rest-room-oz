import { useContext, useEffect, useState, useRef } from "react"
import { AppContext } from "../context/AppContext"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"

export default function Chat()
{
    gsap.registerPlugin(TextPlugin)
    
    const chatRef = useRef()
    
    const [chat, setChat] = useState(null)
    const app = useContext(AppContext)

    useEffect(() => {
        app.hover ? setChat(app.hover) : setChat(null)
    }, [app.hover])

    useEffect(() => {
        const tl = gsap.timeline()

        tl.to(chatRef.current, {
            text: '',
            duration: 0
        }, 0)
        tl.to(chatRef.current, {
            duration: 1,
            text: chat
        }, 0.1)
    }, [chat])

    return  <section id="chat">
                { chat ? <div className="chat container" ref={ chatRef }></div> : null }
            </section>
}