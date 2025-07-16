import { useTexture, useGLTF } from "@react-three/drei"

export default function Barrel()
{
    // Load model
    const barrel = useGLTF("./models/barrel.glb")

    // Load texture
    const barrelBakedTexture = useTexture('./textures/barrel-baked.jpg')
    barrelBakedTexture.flipY = false

    // Mouse events handlers
    const eventOnPointerEnterHandler = (event) => {

        document.body.style.cursor = "pointer"
        console.log("Barrel")
    }
    

    const eventOnPointerLeaveHandler = (event) => {

        document.body.style.cursor = "default"
    }

    return  <group  onPointerEnter={ eventOnPointerEnterHandler }
                    onPointerLeave={ eventOnPointerLeaveHandler }
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
                >
                    <meshBasicMaterial map={ barrelBakedTexture } />
                </mesh>
                <mesh   geometry={ barrel.nodes.Bottle_icosphere.geometry }
                        position={ barrel.nodes.Bottle_icosphere.position }
                        rotation={ barrel.nodes.Bottle_icosphere.rotation }
                >
                    <meshBasicMaterial map={ barrelBakedTexture } />
                </mesh>
                <mesh   geometry={ barrel.nodes.Bottle_triangle.geometry }
                        position={ barrel.nodes.Bottle_triangle.position }
                        rotation={ barrel.nodes.Bottle_triangle.rotation }
                >
                    <meshBasicMaterial map={ barrelBakedTexture } />
                </mesh>
            </group>
}