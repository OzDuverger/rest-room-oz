import { createContext, useState } from "react"

export const AppContext = createContext(null)
export const AppSetterContext = createContext(null)

export function AppProvider({ children })
{
    const [app, setApp] = useState({
        hover: null,
        hoverTime: 1,
        loading: true,
        focus: null,
        information: null,
        goToGlobalCam: false,
        camMoves: false,
        audioPlay: false,
        askingAudio: true,
        presentation: 0,
        // Mobile == screen < 450px
        mobile: false
    })

    return  <AppContext.Provider value={ app }>
                <AppSetterContext.Provider value={ setApp }>
                    { children }
                </AppSetterContext.Provider>
            </AppContext.Provider>
}