import { Center, PresentationControls, Html, OrbitControls } from "@react-three/drei"
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
    const [canMove, setCanMove] = useState(false)

    const nextChat = (e) => {

        if (i < max) {
            if (e.type === "keydown" && e.key === "Enter") {
                if (i !== 8) {
                    i++
                    setChat(data[i].text)
                }
            } else if (e.type === "click" && e.target.id === "riri") {
                if (i === 8) {
                    i++
                    setCanMove(true)
                    setChat(data[i].text)
                }
            }
        } else {
            setLoading(false)
        }
    }


    return  <>
                <Html fullscreen>
                    <Riri canMove={ canMove } nextChat={ nextChat } />
                    { loading ? <Presentation chat={ chat } nextChat={ nextChat } /> : <Chat />}
                </Html>
    {/* TO-DO : Create loader if presentation is too fast */}
                {/* <Suspense
                    fallback={ <Riri /> }
                > */}
                <OrbitControls makeDefault />
                    {/* <PresentationControls   global
                                            polar={ [-0.15, 0.25] }
                                            azimuth={ [-0.25, 0.25] }
                                            snap
                    > */}
                    {/* { loading ? <></> : (<Center>
                                            <Room />
                                            <Games />
                                            <Barrel />
                                            <Table />
                                            <Chimney />
                                            <Bench />
                                            <Shelf />
                                        </Center>)
                    } */}
                        {/* <Center>
                            <Room />
                            <Games />
                            <Barrel />
                            <Table />
                            <Chimney />
                            <Bench />
                            <Shelf />
                        </Center> */}
                    {/* </PresentationControls> */}
                {/* </Suspense> */}
            </>
}