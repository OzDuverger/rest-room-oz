import { useContext, useEffect, useState } from "react"

// Context
import { AppContext, AppSetterContext } from "../context/AppContext"

export default function EscapeButton()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    const [isOnGlobalCam, setIsOnGlobalCam] = useState(true)

    useEffect(() => {
        if (app.focus === null) {
            setIsOnGlobalCam(true)
        } else {
            if (app.information === null) {
                setIsOnGlobalCam(false)
            } else {
                setIsOnGlobalCam(true)
            }
        }
    }, [app.focus, app.information])

    const goBackToGlobalCam = () => {
        setApp({...app, goToGlobalCam: true})
    }

    return  <>
                { isOnGlobalCam === false ? (<img onClick={ goBackToGlobalCam } className="escape-button" src="/svg/esc-button.svg" alt="escape-button" />) : <></> }
            </>
}