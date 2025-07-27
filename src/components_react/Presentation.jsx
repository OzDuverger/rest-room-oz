import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"

export default function Presentation(
    {
        chat,
        timeChat,
        nextChat
    }
)
{
    // Sounds part
    const SpeakSound = new Audio("./sounds/sound-effect-toriel.mp3")

    // Text part
    gsap.registerPlugin(TextPlugin)

    const chatRef = useRef()

    useEffect(() => {
        document.addEventListener("keydown", nextChat, true)
        SpeakSound.volume = 0.5
    }, [])

    useEffect(() => {

        SpeakSound.play()

        const tl = gsap.timeline()

        tl.to(chatRef.current, {
            text: '',
            duration: 0
        }, 0)
        tl.to(chatRef.current, {
            duration: timeChat,
            text: chat
        }, 0.1)
    }, [chat])

    return  <>
                <section id="presentation">
                    <div className="chat" ref={ chatRef }></div>
                    <div className="next">Press Enter</div>
                </section>
            </>
}