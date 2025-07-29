import { useTexture, useGLTF } from "@react-three/drei"

export default function Room()
{
    // Load model
    const room = useGLTF("./models/room.glb")
    
    // Load texture
    const roomBakedTexture = useTexture("./textures/room-baked.jpg")
    roomBakedTexture.flipY = false

    return <group>
                <mesh geometry={ room.nodes.room.geometry } position={ room.nodes.room.position }>
                    <meshBasicMaterial map={ roomBakedTexture } />
                </mesh>
                <mesh geometry={ room.nodes.wall_1.geometry } position={ room.nodes.wall_1.position }>
                    <meshBasicMaterial map={ roomBakedTexture } />
                </mesh>
                <mesh   geometry={ room.nodes.wall_2.geometry }
                        position={ room.nodes.wall_2.position }
                        rotation={ room.nodes.wall_2.rotation }
                >
                    <meshBasicMaterial map={ roomBakedTexture } />
                </mesh>
            </group>
}