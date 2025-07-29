import { useState, useEffect, useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../context/AppContext"

// React Components
import Riri from "./Riri"
import Chat from "./Chat"
import Presentation from "./Presentation"

// Texts
import data from "../texts/presentation.json"

export default function HtmlExperience()
{
    // Ambient Sound part
    const AmbientAudio = new Audio("./sounds/chill-lofi-ambient.mp3")
    useEffect(() => {
        AmbientAudio.loop = true
        AmbientAudio.volume = 0.25
        AmbientAudio.play()
        // DEBUG !!!
        // setApp({...app, loading: false})
        // DEBUG !!!
    }, [])
    
    // Get app context setter
    const setApp = useContext(AppSetterContext)

    // Loading
    const [loading, setLoading] = useState(true)
    const app = useContext(AppContext)

    useEffect(() => {
        setLoading(app.loading)
    }, [app.loading])

    // Presentation
        // Index
    let i = 0
    let nextAction = true
    const max = data.length - 1

    const [chat, setChat] = useState(data[i].text)
    const [timeChat, setTimeChat] = useState(data[i].time)
    const [canMove, setCanMove] = useState(false)

    const nextChat = (e) => {
        if (nextAction) {
            if (i < max) {
                if (e.type === "keydown" && e.key === "Enter") {
                    if (i !== 8) {
                        i++
                        setChat(data[i].text)
                        setTimeChat(data[i].time)
                        nextAction = false
                        setTimeout(() => { nextAction = true }, data[i].time * 1000)
                    }
                } else if (e.type === "click" && e.target.id === "riri") {
                    if (i === 8) {
                        i++
                        setCanMove(true)
                        setChat(data[i].text)
                        setTimeChat(data[i].time)
                        nextAction = false
                        setTimeout(() => { nextAction = true }, data[i].time * 1000)
                    }
                }
            } else {
                setLoading(false)
            }
        }
    }

    return  <>
                <div id="html-presentation" className={ loading ? "black-screen" : null } >
                    <Riri canMove={ canMove } nextChat={ nextChat } />
                    { loading ? (<Presentation chat={ chat } timeChat={ timeChat } nextChat={ nextChat } />) : null }
                    <Chat />
                </div>
            </>
}