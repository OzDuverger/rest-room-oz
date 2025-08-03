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

    const nextChat = (e) => {
        if (app.nextAction && (
            e.type === "keydown" && e.key === "Enter"
            ||
            e.type === "click" && e.target.className === "next"
        )) {
            document.removeEventListener("keydown", nextChat, true)
            if (app.presentation !== 8) {
                setApp({...app, presentation: (app.presentation + 1), nextAction: false})
            }
        }
    }

    useEffect(() => {
        if (app.presentation < max) {
            speaking(chatRef.current, data[app.presentation].time, data[app.presentation].text)
        } else {
            setApp({...app, loading: false})
        }
    }, [app.presentation])

    useEffect(() => {
            document.addEventListener("keydown", nextChat, true)
        if (!app.nextAction) {
            document.removeEventListener("keydown", nextChat, true)
            setTimeout(() => {
                setApp({...app, nextAction: true})
                document.addEventListener("keydown", nextChat, true)
                }, data[app.presentation].time * 1250)
        }
    }, [app.nextAction])

    return  <section id="presentation">
                <div className="chat" ref={ chatRef }></div>
                <div className="next">Press Enter</div>
            </section>
}