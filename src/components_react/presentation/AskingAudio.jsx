import { useContext, useEffect, useState } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Texts
import englishText from "../../texts/en/asking-audio.json"
import frenchText from "../../texts/fr/asking-audio.json"

export default function AskingAudio()
{
    // Get app context
    const setApp = useContext(AppSetterContext)
    const app = useContext(AppContext)

    // Languages
    const [text, setText] = useState(englishText[0].text)
    useEffect(() => {
        if (app.french) {
            setText(frenchText[0].text)
        } else {
            setText(englishText[0].text)
        }
    }, [app.french])

    const soundOn = () => {
        setApp({...app, audioPlay: true, askingAudio: false})
    }
    
    const soundOff = () => {
        setApp({...app, audioPlay: false, askingAudio: false})
    }

    const setFrench = () => {
        setApp({...app, french: true})
    }
    
    const setEnglish = () => {
        setApp({...app, french: false})
    }

    return  <section id="asking-audio">
                <div className="container audio">
                    <div className="text">
                        { text }
                    </div>
                    <div className="buttons">
                        <img onClick={ setFrench } className="button" src="/svg/french-flag.svg" alt="french" />
                        <img onClick={ setEnglish } className="button" src="/svg/american-flag.svg" alt="english" />
                    </div>
                    <div className="buttons">
                        <img onClick={ soundOn } className="button" src="/svg/speaker-on.svg" alt="speaker on" />
                        <img onClick={ soundOff } className="button" src="/svg/speaker-off.svg" alt="speaker off" />
                    </div>
                </div>
            </section>
}