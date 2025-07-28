import { useEffect, useRef, useContext } from "react"
import { speaking } from "../usefull/Speaking"

export default function Presentation(
    {
        chat,
        timeChat,
        nextChat
    }
)
{
    const chatRef = useRef()
    
    useEffect(() => {
        document.addEventListener("keydown", nextChat, true)
    }, [])

    useEffect(() => {
        speaking(chatRef.current, timeChat, chat)
    }, [chat])

    return  <>
                <section id="presentation">
                    <div className="chat" ref={ chatRef }></div>
                    <div className="next">Press Enter</div>
                </section>
            </>
}