import { useTexture, useGLTF } from "@react-three/drei"
import { useContext } from "react"
import { AppContext, AppSetterContext } from "../context/AppContext"
import { useThree } from "@react-three/fiber"
import { camGoesTo } from "../usefull/Camera"
import { eventOnPointerEnterHandler, eventOnPointerLeaveHandler } from "../usefull/MouseEvents"

export default function Shelf()
{
    // Get app context setter
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    // Camera
    const { gl, camera } = useThree()

    // Load model
    const shelf = useGLTF("./models/shelf.glb")
    
    // Load texture
    const shelfBakedTexture = useTexture('./textures/shelf-baked.jpg')
    shelfBakedTexture.flipY = false

    // Mouse events handlers
    const groupPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, null, setApp, "Hobbies")
    }

    const topLeftBooksPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, "Hobbies", setApp, "Languages")
    }

    const topRightBooksPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, "Hobbies", setApp, "Music")
    }

    const centerLeftBooksPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, "Hobbies", setApp, "Board games")
    }

    const centerRightBooksPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, "Hobbies", setApp, "Theatre")
    }

    const bottomLeftBooksPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, "Hobbies", setApp, "Sport")
    }

    const bottomRightBooksPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, "Hobbies", setApp, "Juggling")
    }

    const onPointerLeave = (event) => {
        eventOnPointerLeaveHandler(app, setApp)
    }
    
    const eventOnClick = (event) => {
        const pos = {
            x: 1.75,
            y: -1.05,
            z: 0
        }
        const rot = {
            x: -0.05,
            y: 1.5
        }
        camGoesTo(camera, pos, rot)
        setApp({...app, focus: "Hobbies" })
    }
    
    return  <group  onPointerEnter={ groupPointerEnter }
                    onPointerLeave={ onPointerLeave }
                    onClick={ eventOnClick }
            >
                <mesh   geometry={ shelf.nodes.Bookshelf.geometry }
                        position={ shelf.nodes.Bookshelf.position }
                        rotation={ shelf.nodes.Bookshelf.rotation }
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
                <mesh   geometry={ shelf.nodes.Blue_Book_2.geometry }
                        position={ shelf.nodes.Blue_Book_2.position }
                        rotation={ shelf.nodes.Blue_Book_2.rotation }
                        onPointerEnter={ topLeftBooksPointerEnter }
                        onPointerLeave={ onPointerLeave }
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
                <mesh   geometry={ shelf.nodes.Green_Book_1.geometry }
                        position={ shelf.nodes.Green_Book_1.position }
                        rotation={ shelf.nodes.Green_Book_1.rotation }
                        onPointerEnter={ topRightBooksPointerEnter }
                        onPointerLeave={ onPointerLeave }
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
                <mesh   geometry={ shelf.nodes.Red_Book_4.geometry }
                        position={ shelf.nodes.Red_Book_4.position }
                        rotation={ shelf.nodes.Red_Book_4.rotation }
                        onPointerEnter={ centerLeftBooksPointerEnter }
                        onPointerLeave={ onPointerLeave }
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
                <mesh   geometry={ shelf.nodes.Orange_Book_2.geometry }
                        position={ shelf.nodes.Orange_Book_2.position }
                        rotation={ shelf.nodes.Orange_Book_2.rotation }
                        onPointerEnter={ centerRightBooksPointerEnter }
                        onPointerLeave={ onPointerLeave }
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
                <mesh   geometry={ shelf.nodes.seven_wonders.geometry }
                        position={ shelf.nodes.seven_wonders.position }
                        rotation={ shelf.nodes.seven_wonders.rotation }
                        onPointerEnter={ bottomLeftBooksPointerEnter }
                        onPointerLeave={ onPointerLeave }
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
                <mesh   geometry={ shelf.nodes.teddy_bear.geometry }
                        position={ shelf.nodes.teddy_bear.position }
                        rotation={ shelf.nodes.teddy_bear.rotation }
                        onPointerEnter={ bottomRightBooksPointerEnter }
                        onPointerLeave={ onPointerLeave }
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
            </group>
}