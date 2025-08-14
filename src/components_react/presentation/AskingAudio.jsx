import { useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

export default function AskingAudio()
{
    // Get app context
    const setApp = useContext(AppSetterContext)
    const app = useContext(AppContext)

    const soundOn = () => {
        setApp({...app, audioPlay: true, askingAudio: false})
    }
    
    const soundOff = () => {
        setApp({...app, audioPlay: false, askingAudio: false})
    }

    return  <section id="asking-audio">
                <div className="container audio">
                    <div className="text">
                        This experience has been thinking for Desktop but still available on mobile, nevertheless it's less comfortable.
                        This experience has also been thinking with some audio, nevertheless the choice is yours.
                    </div>
                    <div className="buttons">
                        <img onClick={ soundOn } className="button" src="/svg/speaker-on.svg" alt="speaker on" />
                        <img onClick={ soundOff } className="button" src="/svg/speaker-off.svg" alt="speaker off" />
                    </div>
                </div>
            </section>
}