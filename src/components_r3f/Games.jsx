import { useTexture, useGLTF } from "@react-three/drei"
import { useContext } from "react"
import { AppContext, AppSetterContext } from "../context/AppContext"
import { useThree } from "@react-three/fiber"
import { camGoesTo } from "../usefull/Camera"

export default function Games()
{
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
    const eventOnPointerEnterHandler = (event) => {

        if (app.focus === null) {
            document.body.style.cursor = "pointer"
            setApp({...app, hover: "Games" })
        }
    }

    const eventOnPointerLeaveHandler = (event) => {

        document.body.style.cursor = "default"
        setApp({...app, hover: null })
    }

    const eventOnClick = () => {
        const pos = {
            x: -0.25,
            y: -2.5,
            z: 0.75
        }
        camGoesTo(camera, pos)
        setApp({...app, focus: "Games" })
    }

    return  <>
                <group   onPointerEnter={ eventOnPointerEnterHandler }
                        onPointerLeave={ eventOnPointerLeaveHandler }
                        onClick={ eventOnClick }
                >
                    <mesh   geometry={ games.nodes.game_cube_1.geometry }
                            position={ games.nodes.game_cube_1.position }
                            rotation={ games.nodes.game_cube_1.rotation }
                    >
                        <meshBasicMaterial map={ roomBakedTexture } />
                    </mesh>
                    <mesh   geometry={ games.nodes.game_cube_2.geometry }
                            position={ games.nodes.game_cube_2.position }
                            rotation={ games.nodes.game_cube_2.rotation }
                    >
                        <meshBasicMaterial map={ roomBakedTexture } />
                    </mesh>
                    <mesh   geometry={ games.nodes.game_cube_3.geometry }
                            position={ games.nodes.game_cube_3.position }
                            rotation={ games.nodes.game_cube_3.rotation }
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
                <mesh   geometry={ games.nodes.carpet.geometry }
                        position={ games.nodes.carpet.position }
                        rotation={ games.nodes.carpet.rotation }
                >
                    <meshBasicMaterial map={ roomBakedTexture } />
                </mesh>
            </>
}