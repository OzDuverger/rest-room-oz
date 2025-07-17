import { useTexture, useGLTF } from "@react-three/drei"
import { useContext } from "react"
import { AppSetterContext } from "../context/AppContext"

export default function Shelf()
{
    // Get app context setter
    const setApp = useContext(AppSetterContext)

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
    
    return  <group  onPointerEnter={ eventOnPointerEnterHandler }
                    onPointerLeave={ eventOnPointerLeaveHandler }
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