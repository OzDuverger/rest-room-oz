import { useTexture, useGLTF } from "@react-three/drei"
import { useContext } from "react"
import { AppSetterContext } from "../context/AppContext"
import { useThree } from "@react-three/fiber"
import { gsap } from "gsap"

export default function Bench()
{
    // Get app context setter
    const setApp = useContext(AppSetterContext)
    
    // Camera
    const { gl, camera } = useThree()

    // Load model
    const bench = useGLTF("./models/bench.glb")
    
    // Load texture
    const benchBakedTexture = useTexture('./textures/bench-baked.jpg')
    benchBakedTexture.flipY = false

    // Mouse events handlers
    const eventOnPointerEnterHandler = (event) => {

        document.body.style.cursor = "pointer"
        setApp({ hover: "Bench" })
    }

    const eventOnPointerLeaveHandler = (event) => {

        document.body.style.cursor = "default"
        setApp({ hover: null })
    }

    const eventOnClick = () => {
        const tl = gsap.timeline()
        tl.to(camera.position, {
            x: 1.75,
            y: -1.45,
            z: 0,
            duration: 2
        }, 0)
    }

    return <group   onPointerEnter={ eventOnPointerEnterHandler }
                    onPointerLeave={ eventOnPointerLeaveHandler }
                    onClick={ eventOnClick }
            >
                <mesh   geometry={ bench.nodes.Hammer.geometry }
                        position={ bench.nodes.Hammer.position }
                        rotation={ bench.nodes.Hammer.rotation }
                >
                    <meshBasicMaterial map={ benchBakedTexture } />
                </mesh>
                <mesh   geometry={ bench.nodes.Spanner_Wrench_3.geometry }
                        position={ bench.nodes.Spanner_Wrench_3.position }
                        rotation={ bench.nodes.Spanner_Wrench_3.rotation }
                >
                    <meshBasicMaterial map={ benchBakedTexture } />
                </mesh>
                <mesh   geometry={ bench.nodes.screw_driver_3.geometry }
                        position={ bench.nodes.screw_driver_3.position }
                        rotation={ bench.nodes.screw_driver_3.rotation }
                >
                    <meshBasicMaterial map={ benchBakedTexture } />
                </mesh>
                <mesh   geometry={ bench.nodes.Bench.geometry }
                        position={ bench.nodes.Bench.position }
                        rotation={ bench.nodes.Bench.rotation }
                >
                    <meshBasicMaterial map={ benchBakedTexture } />
                </mesh>
            </group>
}