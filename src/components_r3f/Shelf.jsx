import { useTexture, useGLTF } from "@react-three/drei"
import { useContext } from "react"
import { AppSetterContext } from "../context/AppContext"
import { useThree } from "@react-three/fiber"
import { gsap } from "gsap"

export default function Shelf()
{
    // Get app context setter
    const setApp = useContext(AppSetterContext)

    // Camera
    const { gl, camera } = useThree()

    // Load model
    const shelf = useGLTF("./models/shelf.glb")
    
    // Load texture
    const shelfBakedTexture = useTexture('./textures/shelf-baked.jpg')
    shelfBakedTexture.flipY = false

    // Mouse events handlers
    const eventOnPointerEnterHandler = (event) => {
    
        document.body.style.cursor = "pointer"
        setApp({ hover: "Shelf" })
    }

    const eventOnPointerLeaveHandler = (event) => {

        document.body.style.cursor = "default"
        setApp({ hover: null })
    }
    
    const eventOnClick = (event) => {
        const tl = gsap.timeline()
        tl.to(camera.position, {
            x: 1.75,
            y: -1.05,
            z: 0,
            duration: 2
        }, 0)
        tl.to(camera.rotation, {
            x: -0.05,
            y: 1.5,
            duration: 2
        }, 0)
    }
    
    return  <group  onPointerEnter={ eventOnPointerEnterHandler }
                    onPointerLeave={ eventOnPointerLeaveHandler }
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
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
                <mesh   geometry={ shelf.nodes.Green_Book_1.geometry }
                        position={ shelf.nodes.Green_Book_1.position }
                        rotation={ shelf.nodes.Green_Book_1.rotation }
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
                <mesh   geometry={ shelf.nodes.Orange_Book_2.geometry }
                        position={ shelf.nodes.Orange_Book_2.position }
                        rotation={ shelf.nodes.Orange_Book_2.rotation }
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
                <mesh   geometry={ shelf.nodes.Red_Book_4.geometry }
                        position={ shelf.nodes.Red_Book_4.position }
                        rotation={ shelf.nodes.Red_Book_4.rotation }
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
                <mesh   geometry={ shelf.nodes.seven_wonders.geometry }
                        position={ shelf.nodes.seven_wonders.position }
                        rotation={ shelf.nodes.seven_wonders.rotation }
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
                <mesh   geometry={ shelf.nodes.teddy_bear.geometry }
                        position={ shelf.nodes.teddy_bear.position }
                        rotation={ shelf.nodes.teddy_bear.rotation }
                >
                    <meshBasicMaterial map={ shelfBakedTexture } />
                </mesh>
            </group>
}