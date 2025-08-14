import { useContext, useEffect, useState } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

export default function SoundButton()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    const [audioPlay, setAudioPlay] = useState(false)

    useEffect(() => {
        setAudioPlay(app.audioPlay)
    }, [app.audioPlay])

    const soundOn = () => {
        setApp({...app, audioPlay: true})
    }
    
    const soundOff = () => {
        setApp({...app, audioPlay: false})
    }

    return  <>
                { audioPlay ? (<img onClick={ soundOff } className="sound-button" src="/svg/speaker-on.svg" alt="speaker on" />) : (<img onClick={ soundOn } className="sound-button" src="/svg/speaker-off.svg" alt="speaker off" />) }
            </>
}