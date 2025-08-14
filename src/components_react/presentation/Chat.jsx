import { useContext, useEffect, useRef, useState } from "react"

// Context
import { AppContext } from "../../context/AppContext"

// Usefull
import { speaking } from "../../usefull/Speaking"

export default function Chat()
{
    const chatRef = useRef()
    const [chat, setChat] = useState(null)
    const [nextAction, setNextAction] = useState(true)
    
    // Get Context
    const app = useContext(AppContext)

    useEffect(() => {
        if (nextAction) {
            app.hover ? setChat(app.hover) : setChat(null)
        }
    }, [app.hover, nextAction])

    useEffect(() => {
        if (chat !== null) {
            setNextAction(false)
            speaking(chatRef.current, app.hoverTime, chat, app.audioPlay)
            setTimeout(() => { setNextAction(true) }, app.hoverTime * 1500)
        }
    }, [chat])

    return  <section id="chat">
                { chat ? <div className="chat container" ref={ chatRef }></div> : null }
            </section>
}