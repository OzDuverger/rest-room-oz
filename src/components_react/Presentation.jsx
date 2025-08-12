import { useEffect, useRef, useContext, useState } from "react"

// Context
import { AppContext, AppSetterContext } from "../context/AppContext"

// Text
import data from "../texts/presentation.json"

// Usefull
import { speaking } from "../usefull/Speaking"

export default function Presentation()
{
    // Get app context
    const setApp = useContext(AppSetterContext)
    const app = useContext(AppContext)

    // Chat var
    const chatRef = useRef()
    const max = data.length - 1

    const [chat, setChat] = useState(false)

    const nextChat = (e) => {
        if (app.nextAction && (
            e.type === "keydown" && e.key === "Enter"
        )) {
            setChat(true)
        }
    }

    useEffect(() => {
        if (app.presentation < max && chat) {
            setChat(false)
            if (app.presentation !== 8) {
                if (window.screen.width <= 450) {
                    setApp({...app, presentation: (app.presentation + 1), nextAction: false, mobile: true})
                } else {
                    setApp({...app, presentation: (app.presentation + 1), nextAction: false, mobile: false})
                }
            }
        }
    }, [chat])

    useEffect(() => {
        if (app.presentation < max) {
            speaking(chatRef.current, data[app.presentation].time, data[app.presentation].text)
        } else {
            setApp({...app, loading: false})
        }
    }, [app.presentation])

    useEffect(() => {
        if (app.presentation === 0) {
            document.addEventListener("keydown", (e) => nextChat(e), true)
        }
        if (!app.nextAction) {
            setTimeout(() => {
                    setApp({...app, nextAction: true})
                }, data[app.presentation].time * 1250)
        }
    }, [app.nextAction])

    return  <section id="presentation">
                <div className="chat" ref={ chatRef }></div>
                <div onClick={ () => { app.presentation !== 8 ? setApp({...app, presentation: app.presentation + 1, nextAction: false}) : null } } className="next">Press Enter</div>
            </section>
}