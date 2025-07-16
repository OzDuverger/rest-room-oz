import { useTexture, useGLTF } from "@react-three/drei"

export default function Bench()
{
    // Load model
    const bench = useGLTF("./models/bench.glb")
    
    // Load texture
    const benchBakedTexture = useTexture('./textures/bench-baked.jpg')
    benchBakedTexture.flipY = false

    // Mouse events handlers
    const eventOnPointerEnterHandler = (event) => {

        document.body.style.cursor = "pointer"
        console.log("Bench")
    }

    const eventOnPointerLeaveHandler = (event) => {

        document.body.style.cursor = "default"
    }

    return <group   onPointerEnter={ eventOnPointerEnterHandler }
                    onPointerLeave={ eventOnPointerLeaveHandler }
            >
                <mesh   geometry={ bench.nodes.Hammer.geometry }
                        position={ bench.nodes.Hammer.position }
                        rotation={ bench.nodes.Hammer.rotation }
                >
                    <meshBasicMaterial map={ benchBakedTexture } />
                </mesh>
                <mesh   geometry={ bench.nodes.Spanner_Wrench_3.geometry }
                        position={ bench.nodes.Spanner_Wrench_3.position }
                        rotation={ bench.nodes.Spanner_Wrench_3.rotation }
                >
                    <meshBasicMaterial map={ benchBakedTexture } />
                </mesh>
                <mesh   geometry={ bench.nodes.screw_driver_3.geometry }
                        position={ bench.nodes.screw_driver_3.position }
                        rotation={ bench.nodes.screw_driver_3.rotation }
                >
                    <meshBasicMaterial map={ benchBakedTexture } />
                </mesh>
                <mesh   geometry={ bench.nodes.Bench.geometry }
                        position={ bench.nodes.Bench.position }
                        rotation={ bench.nodes.Bench.rotation }
                >
                    <meshBasicMaterial map={ benchBakedTexture } />
                </mesh>
            </group>
}