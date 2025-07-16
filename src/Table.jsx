import { useTexture, useGLTF } from "@react-three/drei"

export default function Table()
{
    // Load model
    const table = useGLTF("./models/table.glb")

    // Load texture
    const tableBakedTexture = useTexture('./textures/table-baked.jpg')
    tableBakedTexture.flipY = false

    // Mouse events handlers
    const eventOnPointerEnterHandler = (event) => {

        document.body.style.cursor = "pointer"
        console.log("Table")
    }

    const eventOnPointerLeaveHandler = (event) => {

        document.body.style.cursor = "default"
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
                </mesh>
                <mesh   geometry={ table.nodes.mug.geometry }
                        position={ table.nodes.mug.position }
                        rotation={ table.nodes.mug.rotation }
                >
                    <meshBasicMaterial map={ tableBakedTexture } />
                </mesh>
            </group>
}