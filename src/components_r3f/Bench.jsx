import { useTexture, useGLTF } from "@react-three/drei"
import { useContext } from "react"
import { AppContext, AppSetterContext } from "../context/AppContext"
import { useThree } from "@react-three/fiber"
import { camGoesTo } from "../usefull/Camera"
import { eventOnPointerEnterHandler, eventOnPointerLeaveHandler } from "../usefull/MouseEvents"

export default function Bench()
{
    // Camera
    const { gl, camera } = useThree()
    
    // Get app context setter
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    // Load model
    const bench = useGLTF("./models/bench.glb")
    
    // Load texture
    const benchBakedTexture = useTexture('./textures/bench-baked.jpg')
    benchBakedTexture.flipY = false

    // Mouse events handlers
    const groupPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, null, setApp, "Bench")
    }
    
    const hammerPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, "Bench", setApp, "Knit and Hook")
    }
    
    const spannerPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, "Bench", setApp, "Furniture")
    }
    
    const screwPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, "Bench", setApp, "Clothes")
    }

    const onPointerLeave = (event) => {
        eventOnPointerLeaveHandler(app, setApp)
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
        setApp({...app, focus: "Bench" })
    }

    return <group   onPointerEnter={ groupPointerEnter }
                    onPointerLeave={ onPointerLeave }
                    onClick={ eventOnClick }
            >
                <mesh   geometry={ bench.nodes.Hammer.geometry }
                        position={ bench.nodes.Hammer.position }
                        rotation={ bench.nodes.Hammer.rotation }
                        onPointerEnter={ hammerPointerEnter }
                        onPointerLeave={ onPointerLeave }
                >
                    <meshBasicMaterial map={ benchBakedTexture } />
                </mesh>
                <mesh   geometry={ bench.nodes.Spanner_Wrench_3.geometry }
                        position={ bench.nodes.Spanner_Wrench_3.position }
                        rotation={ bench.nodes.Spanner_Wrench_3.rotation }
                        onPointerEnter={ spannerPointerEnter }
                        onPointerLeave={ onPointerLeave }
                >
                    <meshBasicMaterial map={ benchBakedTexture } />
                </mesh>
                <mesh   geometry={ bench.nodes.screw_driver_3.geometry }
                        position={ bench.nodes.screw_driver_3.position }
                        rotation={ bench.nodes.screw_driver_3.rotation }
                        onPointerEnter={ screwPointerEnter }
                        onPointerLeave={ onPointerLeave }
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