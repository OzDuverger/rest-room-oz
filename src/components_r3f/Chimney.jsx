import { useTexture, useGLTF } from "@react-three/drei"

export default function Chimney()
{
    // Load model
    const chimney = useGLTF("./models/chimney.glb")
    
    // Load texture
    const chimneyBakedTexture = useTexture('./textures/chimney-baked.jpg')
    chimneyBakedTexture.flipY = false

    return <group>
                <mesh   geometry={ chimney.nodes.Chimney.geometry }
                        position={ chimney.nodes.Chimney.position }
                        rotation={ chimney.nodes.Chimney.rotation }
                >
                    <meshBasicMaterial map={ chimneyBakedTexture } />
                </mesh>
                <mesh   geometry={ chimney.nodes.Wooden_logs.geometry }
                        position={ chimney.nodes.Wooden_logs.position }
                        rotation={ chimney.nodes.Wooden_logs.rotation }
                >
                    <meshBasicMaterial map={ chimneyBakedTexture } />
                </mesh>
            </group>
}