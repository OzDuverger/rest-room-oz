import { Html, useTexture, useGLTF } from "@react-three/drei"
import { useContext } from "react"
import { AppSetterContext } from "../context/AppContext"

export default function Table()
{
    // Get app context setter
    const setApp = useContext(AppSetterContext)

    // Load model
    const table = useGLTF("./models/table.glb")

    // Load texture
    const tableBakedTexture = useTexture('./textures/table-baked.jpg')
    tableBakedTexture.flipY = false

    // Mouse events handlers
    const eventOnPointerEnterHandler = (event) => {

        document.body.style.cursor = "pointer"
        setApp({ hover: "Table" })
    }

    const eventOnPointerLeaveHandler = (event) => {

        document.body.style.cursor = "default"
        setApp({ hover: null })
    }

    return  <group  onPointerEnter={ eventOnPointerEnterHandler }
                    onPointerLeave={ eventOnPointerLeaveHandler }
            >
                <mesh   geometry={ table.nodes.Table.geometry }
                        position={ table.nodes.Table.position }
                        rotation={ table.nodes.Table.rotation }
                >
                    <meshBasicMaterial map={ tableBakedTexture } />
                </mesh>
                <mesh   geometry={ table.nodes.mug.geometry }
                        position={ table.nodes.mug.position }
                        rotation={ table.nodes.mug.rotation }
                >
                    <meshBasicMaterial map={ tableBakedTexture } />
                </mesh>
                <mesh   geometry={ table.nodes.laptop.geometry }
                        position={ table.nodes.laptop.position }
                        rotation={ table.nodes.laptop.rotation }
                >
                    <meshBasicMaterial map={ tableBakedTexture } />
                </mesh>
                <mesh   geometry={ table.nodes.screen.geometry }
                        position={ table.nodes.screen.position }
                        rotation={ table.nodes.screen.rotation }
                >
                    <meshBasicMaterial map={ tableBakedTexture } />
                    {/* Iframe */}
                    <Html   transform
                            zIndexRange={[1, 0]}
                            occlude
                            wrapperClass="htmlScreen"
                            distanceFactor={ 1 }
                            rotation-x={-1.57}
                            scale={ 0.232}
                            position-x={0.01}
                    >
                        <iframe src="https://oz-duverger-dev.netlify.app/" />
                    </Html>
                </mesh>
            </group>
}