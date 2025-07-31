import { useContext, useEffect } from "react"
import { useThree } from "@react-three/fiber"

// Context
import { AppContext, AppSetterContext } from "../context/AppContext"

// Usefull
import { camInitPos, camGoesTo } from "../usefull/Camera"

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
    const initialRot = {
        x: camera.rotation.x,
        y: camera.rotation.y,
        z: camera.rotation.z
    }

    // Keyboard event
    const goBackGlobal = (e) => {

        if (e.key === "Escape" && app.information === null) {
            camGoesTo(camera, camInitPos, initialRot)
            setApp({...app, focus: null})
        }
    }

    return  <mesh>
                <boxGeometry />
                <meshBasicMaterial color={ "red" } wireframe visible={ false } />
            </mesh>
}