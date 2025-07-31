import { useContext, useEffect } from "react"
import { useThree } from "@react-three/fiber"

// Context
import { AppContext, AppSetterContext } from "../context/AppContext"

// Usefull
import { camInitPos, camInitRot, camGoesTo } from "../usefull/Camera"

export default function Return()
{
    useEffect(() => {
        document.addEventListener("keydown", goBackGlobal, true)
    }, [])

    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    // Camera
    const { gl, camera } = useThree()
    
    useEffect(() => {
        if (app.goToGlobalCam === true && app.information === null) {
            camGoesTo(camera, camInitPos, camInitRot)
            setApp({...app, focus: null, goToGlobalCam: false})
        }
    }, [app.goToGlobalCam])

    // Keyboard event
    const goBackGlobal = (e) => {
        if (e.key === "Escape" && app.information === null) {
            camGoesTo(camera, camInitPos, camInitRot)
            setApp({...app, focus: null, goToGlobalCam: false})
        }
    }

    return  <mesh>
                <boxGeometry />
                <meshBasicMaterial color={ "red" } wireframe visible={ false } />
            </mesh>
}