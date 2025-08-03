import { useContext } from "react"
import { useTexture, useGLTF } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

// Context
import { AppContext, AppSetterContext } from "../context/AppContext"

// Usefull
import { camGoesTo } from "../usefull/Camera"
import { eventOnPointerEnterHandler, eventOnPointerLeaveHandler } from "../usefull/MouseEvents"

export default function Games()
{
    // Const def
    const HOVER_TEXT = "As a great player, Oz is also Game Master and Animator"
    const HOVER_TIME = 3
    const FOCUS = "Games"

    // Camera
    const { gl, camera } = useThree()

    // Get app context setter
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    // Load model
    const games = useGLTF("./models/games.glb")

    // Load texture
    const roomBakedTexture = useTexture("./textures/room-baked.jpg")
    roomBakedTexture.flipY = false

    // Mouse events handlers
        // Hover
    const groupPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, null, setApp, HOVER_TEXT, HOVER_TIME)
    }

    const cubeLeftPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, FOCUS, setApp, "Experiences")
    }

    const cubeCenterPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, FOCUS, setApp, "Activities")
    }

    const cubesRightPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, FOCUS, setApp, "Contact")
    }

    const onPointerLeave = (event) => {
        eventOnPointerLeaveHandler(app, setApp)
    }
        // Click
    const groupOnClick = () => {
        let pos = {
            x: -0.25,
            y: -2.5,
            z: 0.75
        }

        // Mobile
        if (app.mobile) {
            pos = {
                x: -0.25,
                y: -2.5,
                z: 1.3
            }
        }
        camGoesTo(camera, pos)
        if (app.focus === null) {
            setApp({...app, focus: FOCUS })
        }
    }

    const cubeLeftOnClick = (event) => {
        if (app.focus === FOCUS) {
            setApp({...app, information: "game-master-experiences"})
        }
    }
    
    const cubeCenterOnClick = (event) => {
        if (app.focus === FOCUS) {
            setApp({...app, information: "game-master-activities"})
        }
    }
    
    const cubesRightOnClick = (event) => {
        if (app.focus === FOCUS) {
            setApp({...app, information: "game-master-contact"})
        }
    }

    return  <>
                <group  onPointerEnter={ groupPointerEnter }
                        onPointerLeave={ onPointerLeave }
                        onClick={ groupOnClick }
                >
                    <mesh   geometry={ games.nodes.game_cube_1.geometry }
                            position={ games.nodes.game_cube_1.position }
                            rotation={ games.nodes.game_cube_1.rotation }
                            onPointerEnter={ cubeLeftPointerEnter }
                            onPointerLeave={ onPointerLeave }
                            onClick={ cubeLeftOnClick }
                    >
                        <meshBasicMaterial map={ roomBakedTexture } />
                    </mesh>
                    <mesh   geometry={ games.nodes.game_cube_3.geometry }
                            position={ games.nodes.game_cube_3.position }
                            rotation={ games.nodes.game_cube_3.rotation }
                            onPointerEnter={ cubeCenterPointerEnter }
                            onPointerLeave={ onPointerLeave }
                            onClick={ cubeCenterOnClick }
                    >
                        <meshBasicMaterial map={ roomBakedTexture } />
                    </mesh>
                    <group  onPointerEnter={ cubesRightPointerEnter }
                            onPointerLeave={ onPointerLeave }
                            onClick={ cubesRightOnClick }
                    >
                        <mesh   geometry={ games.nodes.game_cube_2.geometry }
                                position={ games.nodes.game_cube_2.position }
                                rotation={ games.nodes.game_cube_2.rotation }
                        >
                            <meshBasicMaterial map={ roomBakedTexture } />
                        </mesh>
                        <mesh   geometry={ games.nodes.game_cube_4.geometry }
                                position={ games.nodes.game_cube_4.position }
                                rotation={ games.nodes.game_cube_4.rotation }
                        >
                            <meshBasicMaterial map={ roomBakedTexture } />
                        </mesh>
                    </group>
                </group>
                <mesh   geometry={ games.nodes.carpet.geometry }
                        position={ games.nodes.carpet.position }
                        rotation={ games.nodes.carpet.rotation }
                >
                    <meshBasicMaterial map={ roomBakedTexture } />
                </mesh>
            </>
}