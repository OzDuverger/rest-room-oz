import { useState, useEffect, useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../context/AppContext"

// React Components
import AskingAudio from "./presentation/AskingAudio"
import EscapeButton from "./buttons/EscapeButton"
import Riri from "./presentation/Riri"
import Chat from "./presentation/Chat"
import Presentation from "./presentation/Presentation"
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
import SoundButton from "./buttons/SoundButton"
import LanguagesButton from "./buttons/LanguagesButton"

export default function HtmlExperience()
{
    // Ambient Sound part
    const [ambientAudio, setAmbientAudio] = useState(new Audio("./sounds/chill-lofi-ambient.mp3"))
    useEffect(() => {
        if (window.screen.width <= 450) {
            setApp({...app, mobile: true})
            // DEBUG !!!
            // setApp({...app, mobile: true, loading: false})
            // DEBUG !!!
        }
        // DEBUG !!!
        // setApp({...app, loading: false})
        // DEBUG !!!
    }, [])
    
    // Get app context
    const setApp = useContext(AppSetterContext)
    const app = useContext(AppContext)

    // Sound
    useEffect(() => {
        if(app.audioPlay) {
            ambientAudio.loop = true
            ambientAudio.volume = 0.25
            ambientAudio.play()
        } else {
            ambientAudio.pause()
        }
    }, [app.audioPlay])

    // Loading
    const [loading, setLoading] = useState(true)
    const [askingAudio, setAskingAudio] = useState(true)

    // Informations
    const [information, setInformation] = useState(null)

    useEffect(() => {
        setInformation(app.information)
    }, [app.information])

    useEffect(() => {
        setLoading(app.loading)
    }, [app.loading])
    
    useEffect(() => {
        setAskingAudio(app.askingAudio)
    }, [app.askingAudio])

    return  <>
                <div id="html-presentation" className={ loading ? "black-screen" : null } >
                    <EscapeButton />
                    { !loading && information === null ? (<SoundButton />) : null }
                    { !loading && information === null ? (<LanguagesButton />) : null }
                    { askingAudio ? (<AskingAudio />) : null }
                    { !askingAudio ? (<Riri />) : null }
                    { loading && !askingAudio ? (<Presentation />) : null }
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