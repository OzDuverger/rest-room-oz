import { useState, useEffect, useContext } from "react"

// Context
import { AppContext } from "../context/AppContext"

// React Components
import Riri from "./Riri"
import Chat from "./Chat"
import Presentation from "./Presentation"

// Texts
import data from "../texts/presentation.json"

export default function HtmlExperience()
{
    // Loading
    const [loading, setLoading] = useState(true)
    const app = useContext(AppContext)

    useEffect(() => {
        setLoading(app.loading)
    }, [app.loading])

    // Presentation
        // Index
    let i = 0
    const max = data.length - 1

    const [chat, setChat] = useState(data[i].text)
    const [canMove, setCanMove] = useState(false)

    const nextChat = (e) => {

        if (i < max) {
            if (e.type === "keydown" && e.key === "Enter") {
                if (i !== 8) {
                    i++
                    setChat(data[i].text)
                }
            } else if (e.type === "click" && e.target.id === "riri") {
                if (i === 8) {
                    i++
                    setCanMove(true)
                    setChat(data[i].text)
                }
            }
        } else {
            setLoading(false)
        }
    }

    return  <>
                <div id="html-presentation" className={ loading ? "black-screen" : null } >
                    <Riri canMove={ canMove } nextChat={ nextChat } />
                    { loading ? (<Presentation chat={ chat } nextChat={ nextChat } />) : null }
                    <Chat />
                </div>
            </>
}