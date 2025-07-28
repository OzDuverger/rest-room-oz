import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import { camInitPos, camGoesTo } from "../usefull/Camera"

export default function Return()
{
    useEffect(() => {
        document.addEventListener("keydown", eventOnClick, true)
    }, [])

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
        }
    }

    return  <mesh>
                <boxGeometry />
                <meshBasicMaterial color={ "red" } wireframe visible={ false } />
            </mesh>
}