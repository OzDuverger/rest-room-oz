import { createContext, useState, useEffect } from "react"

export const AppContext = createContext(null)
export const AppSetterContext = createContext(null)

export function AppProvider({ children })
{
    const [app, setApp] = useState({
        hover: null,
        loading: true,
        focus: null
    })

    return  <AppContext.Provider value={ app }>
                <AppSetterContext.Provider value={ setApp }>
                    { children }
                </AppSetterContext.Provider>
            </AppContext.Provider>
}