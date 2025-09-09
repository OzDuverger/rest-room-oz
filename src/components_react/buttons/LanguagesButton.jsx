import { useContext, useEffect, useState } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

export default function LanguagesButton()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    const [french, setFrench] = useState(false)

    useEffect(() => {
        setFrench(app.french)
    }, [app.french])

    const switchFrench = () => {
        setApp({...app, french: true})
    }
    
    const switchEnglish = () => {
        setApp({...app, french: false})
    }

    return  <>
                { !french ? (<img onClick={ switchFrench } className="flag-button" src="/svg/french-flag.svg" alt="french" />) : (<img onClick={ switchEnglish } className="flag-button" src="/svg/american-flag.svg" alt="english" />) }
            </>
}