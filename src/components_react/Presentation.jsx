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

    const [chat, setChat] = useState(0)
    const [next, setNext] = useState(true)

    const nextChat = (e) => {
        if (next && (
            e.type === "keydown" && e.key === "Enter"
        )) {
            setChat(chat + 1)
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", nextChat, true)
    }, [])

    useEffect(() => {
        document.removeEventListener("keydown", nextChat, true)
        if (chat !== app.presentation && app.presentation < max && app.nextAction) {
            if (app.presentation !== 8) {
                if (window.screen.width <= 450) {
                    setApp({...app, presentation: app.presentation + 1, nextAction: false, mobile: true})
                } else {
                    setApp({...app, presentation: app.presentation + 1, nextAction: false, mobile: false})
                }
            }
        }
        document.addEventListener("keydown", nextChat, true)
    }, [chat])

    useEffect(() => {
        setChat(app.presentation)
        if (app.presentation < max) {
            speaking(chatRef.current, data[app.presentation].time, data[app.presentation].text)
        } else {
            setApp({...app, loading: false})
        }
    }, [app.presentation])

    useEffect(() => {
        setNext(app.nextAction)
        if (!app.nextAction) {
            setTimeout(() => {
                    setApp({...app, nextAction: true})
                }, data[app.presentation].time * 1250)
        }
    }, [app.nextAction])

    return  <section id="presentation">
                <div className="chat" ref={ chatRef }></div>
                <div onClick={ () => { 
                                        if (app.presentation !== 8 && app.presentation < max && app.nextAction) {
                                            setApp({...app, presentation: app.presentation + 1, nextAction: false})
                                        }
                                    } } className="next">Press Enter</div>
            </section>
}