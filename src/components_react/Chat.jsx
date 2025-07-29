import { useContext, useEffect, useRef, useState } from "react"
import { AppContext } from "../context/AppContext"
import { speaking } from "../usefull/Speaking"

export default function Chat()
{
    const chatRef = useRef()
    const [chat, setChat] = useState(null)
    const [nextAction, setNextAction] = useState(true)
    
    const app = useContext(AppContext)

    useEffect(() => {
        if (nextAction) {
            app.hover ? setChat(app.hover) : setChat(null)
        }
    }, [app.hover, nextAction])

    useEffect(() => {
        if (chat !== null) {
            setNextAction(false)
            speaking(chatRef.current, 1, chat)
            setTimeout(() => { setNextAction(true) }, 1500)
        }
    }, [chat])

    return  <section id="chat">
                { chat ? <div className="chat container" ref={ chatRef }></div> : null }
            </section>
}