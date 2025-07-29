import { useThree } from "@react-three/fiber"
import { useContext, useEffect } from "react"
import { camInitPos, camGoesTo } from "../usefull/Camera"
import { AppContext, AppSetterContext } from "../context/AppContext"

export default function Return()
{
    useEffect(() => {
        document.addEventListener("keydown", eventOnClick, true)
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

    const eventOnClick = (e) => {

        if (e.key === "Escape") {
            camGoesTo(camera, camInitPos, initialRot)
            setApp({...app, focus: null})
        }
    }

    return  <mesh>
                <boxGeometry />
                <meshBasicMaterial color={ "red" } wireframe visible={ false } />
            </mesh>
}