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
    const HOVER_TEXT = "Game Master and Animator"
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
    const groupPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, null, setApp, HOVER_TEXT)
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

    const eventOnClick = () => {
        const pos = {
            x: -0.25,
            y: -2.5,
            z: 0.75
        }
        camGoesTo(camera, pos)
        setApp({...app, focus: FOCUS })
    }

    return  <>
                <group  onPointerEnter={ groupPointerEnter }
                        onPointerLeave={ onPointerLeave }
                        onClick={ eventOnClick }
                >
                    <mesh   geometry={ games.nodes.game_cube_1.geometry }
                            position={ games.nodes.game_cube_1.position }
                            rotation={ games.nodes.game_cube_1.rotation }
                            onPointerEnter={ cubeLeftPointerEnter }
                            onPointerLeave={ onPointerLeave }
                    >
                        <meshBasicMaterial map={ roomBakedTexture } />
                    </mesh>
                    <mesh   geometry={ games.nodes.game_cube_3.geometry }
                            position={ games.nodes.game_cube_3.position }
                            rotation={ games.nodes.game_cube_3.rotation }
                            onPointerEnter={ cubeCenterPointerEnter }
                            onPointerLeave={ onPointerLeave }
                    >
                        <meshBasicMaterial map={ roomBakedTexture } />
                    </mesh>
                    <group  onPointerEnter={ cubesRightPointerEnter }
                            onPointerLeave={ onPointerLeave }
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