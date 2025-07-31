import { useContext } from "react"
import { useTexture, useGLTF } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

// Context
import { AppContext, AppSetterContext } from "../context/AppContext"

// Usefull
import { camGoesTo } from "../usefull/Camera"
import { eventOnPointerEnterHandler, eventOnPointerLeaveHandler } from "../usefull/MouseEvents"

export default function Bench()
{
    // Const def
    const HOVER_TEXT = "First of all, oz is a human-does-everything"
    const HOVER_TIME = 2
    const FOCUS = "Bench"

    // Camera
    const { gl, camera } = useThree()
    
    // Get app context setter
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    // Load model
    const bench = useGLTF("./models/bench.glb")
    
    // Load texture
    const benchBakedTexture = useTexture("./textures/bench-baked.jpg")
    benchBakedTexture.flipY = false

    // Mouse events handlers
        // Hover
    const groupPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, null, setApp, HOVER_TEXT, HOVER_TIME)
    }
    
    const hammerPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, FOCUS, setApp, "Knit and Hook")
    }
    
    const spannerPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, FOCUS, setApp, "Furniture")
    }
    
    const screwPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, FOCUS, setApp, "Clothes")
    }

    const onPointerLeave = (event) => {
        eventOnPointerLeaveHandler(app, setApp)
    }
        // Click
    const groupOnClick = () => {
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
        if (app.focus === null) {
            setApp({...app, focus: FOCUS })
        }
    }

    const hammerOnClick = (event) => {
        if (app.focus === FOCUS) {
            setApp({...app, information: "craft-knit-and-hook"})
        }
    }

    const spannerOnClick = (event) => {
        if (app.focus === FOCUS) {
            setApp({...app, information: "craft-furniture"})
        }
    }

    const screwOnClick = (event) => {
        if (app.focus === FOCUS) {
            setApp({...app, information: "craft-clothes"})
        }
    }

    return <group   onPointerEnter={ groupPointerEnter }
                    onPointerLeave={ onPointerLeave }
                    onClick={ groupOnClick }
            >
                <mesh   geometry={ bench.nodes.Hammer.geometry }
                        position={ bench.nodes.Hammer.position }
                        rotation={ bench.nodes.Hammer.rotation }
                        onPointerEnter={ hammerPointerEnter }
                        onPointerLeave={ onPointerLeave }
                        onClick={ hammerOnClick }
                >
                    <meshBasicMaterial map={ benchBakedTexture } />
                </mesh>
                <mesh   geometry={ bench.nodes.Spanner_Wrench_3.geometry }
                        position={ bench.nodes.Spanner_Wrench_3.position }
                        rotation={ bench.nodes.Spanner_Wrench_3.rotation }
                        onPointerEnter={ spannerPointerEnter }
                        onPointerLeave={ onPointerLeave }
                        onClick={ spannerOnClick }
                >
                    <meshBasicMaterial map={ benchBakedTexture } />
                </mesh>
                <mesh   geometry={ bench.nodes.screw_driver_3.geometry }
                        position={ bench.nodes.screw_driver_3.position }
                        rotation={ bench.nodes.screw_driver_3.rotation }
                        onPointerEnter={ screwPointerEnter }
                        onPointerLeave={ onPointerLeave }
                        onClick={ screwOnClick }
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