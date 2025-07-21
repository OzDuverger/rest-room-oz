import { Center, PresentationControls, Html } from "@react-three/drei"
import { Suspense, useState, useContext, useEffect } from "react"

// Context
import { AppContext } from "../context/AppContext"

// Texts
import data from "../texts/presentation.json"

// React Components
import Riri from "../components_react/Riri"
import Chat from "../components_react/Chat"
import Presentation from "../components_react/Presentation"

// R3F Components
import Room from "./Room"
import Games from "./Games"
import Barrel from "./Barrel"
import Table from "./Table"
import Chimney from "./Chimney"
import Bench from "./Bench"
import Shelf from "./Shelf"

export default function Experience()
{
    // Loading
    const [loading, setLoading] = useState(true)
    const app = useContext(AppContext)

    useEffect(() => {
        setLoading(app.loading)
    }, [app.loading])

    // Presentation
        // Index
    let i = 0
    const max = data.length - 1

    const [chat, setChat] = useState(data[i].text)

    const nextChat = (e) => {

        if (e.key === "Enter") {
            if (i < max ) {
                i++
                setChat(data[i].text)
            } else {
                setLoading(false)
            }
        }
    }

    return  <>
    {/* TO-DO : Create loader if presentation is too fast */}
                {/* <Suspense
                    fallback={ <Riri /> }
                > */}
                    <PresentationControls   global
                                            polar={ [-0.15, 0.25] }
                                            azimuth={ [-0.25, 0.25] }
                                            snap
                    >
                        <Center>
                            <Room />
                            <Games />
                            <Barrel />
                            <Table />
                            <Chimney />
                            <Bench />
                            <Shelf />
                        </Center>
                    </PresentationControls>
                {/* </Suspense> */}
                <Html fullscreen>
                    { loading ? <Presentation chat={ chat } nextChat={ nextChat } /> : <Chat />}
                </Html>
            </>
}