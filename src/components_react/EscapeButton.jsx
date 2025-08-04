import { useContext, useEffect, useState } from "react"

// Context
import { AppContext, AppSetterContext } from "../context/AppContext"

export default function EscapeButton()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    const [showEscBtn, setShowEscBtn] = useState(false)

    useEffect(() => {
        if (!app.camMoves) {
            if (app.focus === null) {
                setShowEscBtn(false)
            } else {
                if (app.information === null) {
                    setShowEscBtn(true)
                } else {
                    setShowEscBtn(false)
                }
            }
        } else {
            setShowEscBtn(false)
        }
    }, [app.camMoves, app.information])

    const goBackToGlobalCam = () => {
        setApp({...app, goToGlobalCam: true})
    }

    return  <>
                { showEscBtn ? (<img onClick={ goBackToGlobalCam } className="escape-button" src="/svg/esc-button.svg" alt="escape-button" />) : <></> }
            </>
}