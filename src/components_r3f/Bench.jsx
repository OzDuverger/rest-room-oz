import { useTexture, useGLTF } from "@react-three/drei"
import { useContext } from "react"
import { AppSetterContext } from "../context/AppContext"
import { useThree } from "@react-three/fiber"
import { camGoesTo } from "../usefull/Camera"

export default function Bench()
{
    // Camera
    const { gl, camera } = useThree()
    
    // Get app context setter
    const setApp = useContext(AppSetterContext)

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
        const pos = {
            x: 1.75,
            y: -1.45,
            z: 0.5
        }
        const rot = {
            x: 0,
            y:  -0.05
        }
        camGoesTo(camera, pos, rot)
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