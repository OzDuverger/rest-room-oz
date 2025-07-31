import { useState, useEffect, useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../context/AppContext"

// React Components
import EscapeButton from "./EscapeButton"
import Riri from "./Riri"
import Chat from "./Chat"
import Presentation from "./Presentation"
import BarExperiences from "./Bartender/Experiences"
import Receipes from "./Bartender/Receipes"
import BarContact from "./Bartender/Contact"
import Languages from "./Hobbies/Languages"
import Music from "./Hobbies/Music"
import BoardGames from "./Hobbies/BoardGames"
import Theatre from "./Hobbies/Theatre"
import Sport from "./Hobbies/Sport"
import Juggling from "./Hobbies/Juggling"
import GameMasterExperiences from "./GameMaster/Experiences"
import Activities from "./GameMaster/Activities"
import GameMasterContact from "./GameMaster/Contact"
import KnitAndHook from "./Craft/KnitAndHook"
import Furniture from "./Craft/Furniture"
import Clothes from "./Craft/Clothes"

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

    // Informations
    const [information, setInformation] = useState(null)

    useEffect(() => {
        setInformation(app.information)
    }, [app.information])

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
                if (
                    e.type === "keydown" && e.key === "Enter"
                    ||
                    e.type === "click" && e.target.className === "next"
                ) {
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
                setApp({...app, loading: false})
            }
        }
    }

    return  <>
                <div id="html-presentation" className={ loading ? "black-screen" : null } >
                    <EscapeButton />
                    <Riri canMove={ canMove } nextChat={ nextChat } />
                    { loading ? (<Presentation chat={ chat } timeChat={ timeChat } nextChat={ nextChat } />) : null }
                    {/* Bar */}
                    { information === "bartender-experiences" ? <BarExperiences /> : null }
                    { information === "bartender-receipes" ? <Receipes /> : null }
                    { information === "bartender-contact" ? <BarContact /> : null }
                    {/* Hobbies */}
                    { information === "hobbies-languages" ? <Languages /> : null }
                    { information === "hobbies-music" ? <Music /> : null }
                    { information === "hobbies-board-games" ? <BoardGames /> : null }
                    { information === "hobbies-theatre" ? <Theatre /> : null }
                    { information === "hobbies-sport" ? <Sport /> : null }
                    { information === "hobbies-juggling" ? <Juggling /> : null }
                    {/* Game Master */}
                    { information === "game-master-experiences" ? <GameMasterExperiences /> : null }
                    { information === "game-master-activities" ? <Activities /> : null }
                    { information === "game-master-contact" ? <GameMasterContact /> : null }
                    {/* Craft */}
                    { information === "craft-knit-and-hook" ? <KnitAndHook /> : null }
                    { information === "craft-furniture" ? <Furniture /> : null }
                    { information === "craft-clothes" ? <Clothes /> : null }
                    <Chat />
                </div>
            </>
}