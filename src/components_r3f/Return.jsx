import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import { gsap } from "gsap"

export default function Return()
{
    useEffect(() => {
        document.addEventListener("keydown", eventOnClick, true)
    }, [])

    // Camera
    const { gl, camera } = useThree()
    const initialPos = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z
    }
    const initialRot = {
        x: camera.rotation.x,
        y: camera.rotation.y,
        z: camera.rotation.z
    }

    const eventOnClick = (e) => {

        if (e.key === "Escape") {
            const tl = gsap.timeline()
            tl.to(camera.position, {
                x: initialPos.x,
                y: initialPos.y,
                z: initialPos.z,
                duration: 2
            }, 0)
            tl.to(camera.rotation, {
                x: initialRot.x,
                y: initialRot.y,
                z: initialRot.z,
                duration: 2
            }, 0)
        }
    }

    return  <mesh>
                <boxGeometry />
                <meshBasicMaterial color={ "red" } wireframe visible={ false } />
            </mesh>
}