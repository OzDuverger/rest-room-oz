import { useContext } from "react"
import { useTexture, useGLTF } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

// Context
import { AppContext, AppSetterContext } from "../context/AppContext"

// Usefull
import { camGoesTo } from "../usefull/Camera"
import { eventOnPointerEnterHandler, eventOnPointerLeaveHandler } from "../usefull/MouseEvents"

export default function Shelf()
{
    // Const def
    const HOVER_TEXT = "Oz has diverse and varied hobbies"
    const HOVER_TIME = 2
    const FOCUS = "Shelf"

    // Get app context setter
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    // Camera
    const { gl, camera } = useThree()

    // Load model
    const shelf = useGLTF("./models/shelf.glb")
    
    // Load texture
    const shelfBakedTexture = useTexture("./textures/shelf-baked.jpg")
    shelfBakedTexture.flipY = false

    // Mouse events handlers
        // Hover
    const groupPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, null, setApp, HOVER_TEXT, HOVER_TIME)
    }

    const topLeftBooksPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, FOCUS, setApp, "Languages")
    }

    const topRightBooksPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, FOCUS, setApp, "Music")
    }

    const centerLeftBooksPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, FOCUS, setApp, "Board games")
    }

    const centerRightBooksPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, FOCUS, setApp, "Theatre")
    }

    const bottomLeftBooksPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, FOCUS, setApp, "Sport")
    }

    const bottomRightBooksPointerEnter = (event) => {
        eventOnPointerEnterHandler(app, FOCUS, setApp, "Juggling")
    }

    const onPointerLeave = (event) => {
        eventOnPointerLeaveHandler(app, setApp)
    }

        // Click
    const groupOnClick = (event) => {
        let pos = {
            x: 1.75,
            y: -1.15,
            z: 0
        }

        // Mobile
        if (app.mobile) {
            pos = {
                x: 2.25,
                y: -1.15,
                z: 0.3
            }
        }
        const rot = {
            x: -0.05,
            y: 1.5
        }
        camGoesTo(camera, pos, rot)
        if (app.focus === null) {
            setApp({...app, focus: FOCUS, camMoves: true})
            setTimeout(() => {
                setApp({...app, focus: FOCUS, camMoves: false})
            }, 2000)
        }
    }

    const topLeftBooksOnClick = (event) => {
        if (app.focus === FOCUS) {
            setApp({...app, information: "hobbies-languages"})
        }
    }

    const topRightBooksOnClick = (event) => {
        if (app.focus === FOCUS) {
            setApp({...app, information: "hobbies-music"})
        }
    }

    const centerRightBooksOnClick = (event) => {
        if (app.focus === FOCUS) {
            setApp({...app, information: "hobbies-theatre"})
        }
    }

    const centerLeftBooksOnClick = (event) => {
        if (app.focus === FOCUS) {
            setApp({...app, information: "hobbies-board-games"})
        }
    }

    const bottomLeftBooksOnClick = (event) => {
        if (app.focus === FOCUS) {
            setApp({...app, information: "hobbies-sport"})
        }
    }

    const bottomRightBooksOnClick = (event) => {
        if (app.focus === FOCUS) {
            setApp({...app, information: "hobbies-juggling"})
        }
    }
    
    return  <group  onPointerEnter={ groupPointerEnter }
                    onPointerLeave={ onPointerLeave }
                    onClick={ groupOnClick }
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
                        onClick={ topLeftBooksOnClick }
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
                <mesh   geometry={ shelf.nodes.Green_Book_1.geometry }
                        position={ shelf.nodes.Green_Book_1.position }
                        rotation={ shelf.nodes.Green_Book_1.rotation }
                        onPointerEnter={ topRightBooksPointerEnter }
                        onPointerLeave={ onPointerLeave }
                        onClick={ topRightBooksOnClick }
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
                <mesh   geometry={ shelf.nodes.Red_Book_4.geometry }
                        position={ shelf.nodes.Red_Book_4.position }
                        rotation={ shelf.nodes.Red_Book_4.rotation }
                        onPointerEnter={ centerLeftBooksPointerEnter }
                        onPointerLeave={ onPointerLeave }
                        onClick={ centerLeftBooksOnClick }
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
                <mesh   geometry={ shelf.nodes.Orange_Book_2.geometry }
                        position={ shelf.nodes.Orange_Book_2.position }
                        rotation={ shelf.nodes.Orange_Book_2.rotation }
                        onPointerEnter={ centerRightBooksPointerEnter }
                        onPointerLeave={ onPointerLeave }
                        onClick={ centerRightBooksOnClick }
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
                <mesh   geometry={ shelf.nodes.seven_wonders.geometry }
                        position={ shelf.nodes.seven_wonders.position }
                        rotation={ shelf.nodes.seven_wonders.rotation }
                        onPointerEnter={ bottomLeftBooksPointerEnter }
                        onPointerLeave={ onPointerLeave }
                        onClick={ bottomLeftBooksOnClick }
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
                <mesh   geometry={ shelf.nodes.teddy_bear.geometry }
                        position={ shelf.nodes.teddy_bear.position }
                        rotation={ shelf.nodes.teddy_bear.rotation }
                        onPointerEnter={ bottomRightBooksPointerEnter }
                        onPointerLeave={ onPointerLeave }
                        onClick={ bottomRightBooksOnClick }
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
            </group>
}