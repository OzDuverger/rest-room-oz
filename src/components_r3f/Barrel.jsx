import { useContext } from "react"
import { useThree } from "@react-three/fiber"
import { useTexture, useGLTF } from "@react-three/drei"

// Context
import { AppContext, AppSetterContext } from "../context/AppContext"

// Usefull
import { camGoesTo } from "../usefull/Camera"
import { eventOnPointerEnterHandler, eventOnPointerLeaveHandler } from "../usefull/MouseEvents"

export default function Barrel()
{
    // Const def
    const HOVER_TEXT = "Oz likes night life and especially bartender's life"
    const HOVER_TIME = 3
    const FOCUS = "Barrel"

    // Camera
    const { gl, camera } = useThree()

    // Get app context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    // Load model
    const barrel = useGLTF("./models/barrel.glb")

    // Load texture
    const barrelBakedTexture = useTexture("./textures/barrel-baked.jpg")
    barrelBakedTexture.flipY = false

    // Mouse events handlers
        // Hover
    const groupPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, null, setApp, HOVER_TEXT, HOVER_TIME)
    }

    const cylinderPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, FOCUS, setApp, "Oz' receipes")
    }
    
    const icospherePointerEnter = (event) => {
        eventOnPointerEnterHandler(app, FOCUS, setApp, "Oz' experiences")
    }

    const trianglePointerEnter = (event) => {
        eventOnPointerEnterHandler(app, FOCUS, setApp, "Do you want to contact Oz ?", 2)
    }
    
    const onPointerLeave = (event) => {
        eventOnPointerLeaveHandler(app, setApp)
    }
        // Click
    const groupOnClick = (event) => {
        const pos = {
            x: -0.15,
            y: -1.2,
            z: 2.25
        }
        const rot = {
            x: -0.05,
            y: 1.3,
            z: 0
        }
        camGoesTo(camera, pos, rot)
        if (app.focus === null) {
            setApp({...app, focus: FOCUS})
        }
    }
    
    const icosphereOnClick = (event) => {
        if (app.focus === FOCUS) {
            setApp({...app, information: "bartender-experiences"})
        }
    }

    const cylinderOnClick = (event) => {
        if (app.focus === FOCUS) {
            setApp({...app, information: "bartender-receipes"})
        }
    }

    const triangleOnClick = (event) => {
        if (app.focus === FOCUS) {
            setApp({...app, information: "bartender-contact"})
        }
    }

    return  <group  onPointerEnter={ groupPointerEnter }
                    onPointerLeave={ onPointerLeave }
                    onClick={ groupOnClick }
            >
                <mesh   geometry={ barrel.nodes.Barrel.geometry }
                        position={ barrel.nodes.Barrel.position }
                        rotation={ barrel.nodes.Barrel.rotation }
                >
                    <meshBasicMaterial map={ barrelBakedTexture } />
                </mesh>
                <mesh   geometry={ barrel.nodes.Bottle_cylinder.geometry }
                        position={ barrel.nodes.Bottle_cylinder.position }
                        rotation={ barrel.nodes.Bottle_cylinder.rotation }
                        onPointerEnter={ cylinderPointerEnter }
                        onPointerLeave={ onPointerLeave }
                        onClick={ cylinderOnClick }
                >
                    <meshBasicMaterial map={ barrelBakedTexture } />
                </mesh>
                <mesh   geometry={ barrel.nodes.Bottle_icosphere.geometry }
                        position={ barrel.nodes.Bottle_icosphere.position }
                        rotation={ barrel.nodes.Bottle_icosphere.rotation }
                        onPointerEnter={ icospherePointerEnter }
                        onPointerLeave={ onPointerLeave }
                        onClick={ icosphereOnClick }
                >
                    <meshBasicMaterial map={ barrelBakedTexture } />
                </mesh>
                <mesh   geometry={ barrel.nodes.Bottle_triangle.geometry }
                        position={ barrel.nodes.Bottle_triangle.position }
                        rotation={ barrel.nodes.Bottle_triangle.rotation }
                        onPointerEnter={ trianglePointerEnter }
                        onPointerLeave={ onPointerLeave }
                        onClick={ triangleOnClick }
                >
                    <meshBasicMaterial map={ barrelBakedTexture } />
                </mesh>
            </group>
}