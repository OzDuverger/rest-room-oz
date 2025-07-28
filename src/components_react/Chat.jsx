import { useContext, useEffect, useState, useRef } from "react"
import { AppContext } from "../context/AppContext"
import { speaking } from "../usefull/Speaking"

export default function Chat()
{
    const chatRef = useRef()
    
    const [chat, setChat] = useState(null)
    const app = useContext(AppContext)

    useEffect(() => {
        app.hover ? setChat(app.hover) : setChat(null)
    }, [app.hover])

    useEffect(() => {
        speaking(chatRef.current, 1, chat)
    }, [chat])

    return  <section id="chat">
                { chat ? <div className="chat container" ref={ chatRef }></div> : null }
            </section>
}