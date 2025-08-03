import { Canvas } from "@react-three/fiber"
import { useContext, useEffect, useState } from "react"

// R3F Components
import Experience from "./Experience"

// Context
import { AppContext, AppSetterContext } from "../context/AppContext"

// Usefull
import { camInitPos, camInitPosMobile, camInitRot } from "../usefull/Camera"

export default function Container()
{
    
    // Mobile
    const [pos, setPos] = useState(camInitPos)

    // Get app context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    useEffect(() => {

        if (window.screen.width <= 450) {
            // TO-DO : do the check everywhere
            setApp({...app, mobile: true})
            setPos(camInitPosMobile)
        }
    }, [])

    return <Canvas
                className="r3f"
                flat
                camera={ {
                    fov: 45,
                    near: 0.1,
                    far: 50,
                    position: [ pos.x, pos.y, pos.z ],
                    rotation: [ camInitRot.x, camInitRot.y, camInitRot.z ]
                } }
            >
                <color args={ [ "#030202" ] } attach="background" />
                <Experience />
            </Canvas>
}