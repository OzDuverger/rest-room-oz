import { createContext, useState } from "react"

export const AppContext = createContext(null)
export const AppSetterContext = createContext(null)

export function AppProvider({ children })
{
    const [app, setApp] = useState({
        place: "all",
        hover: null,
        loading: true
    })

    return  <AppContext.Provider value={ app }>
                <AppSetterContext.Provider value={ setApp }>
                    { children }
                </AppSetterContext.Provider>
            </AppContext.Provider>
}