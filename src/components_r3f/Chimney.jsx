import { useMemo, useRef } from "react"
import { useTexture, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

// Shaders
import fireVertexShader from "../shaders/fire/vertex.glsl"
import fireFragmentShader from "../shaders/fire/fragment.glsl"

export default function Chimney()
{
    // Load model
    const chimney = useGLTF("./models/chimney.glb")
    
    // Load texture
    const chimneyBakedTexture = useTexture("./textures/chimney-baked.jpg")
    chimneyBakedTexture.flipY = false
    
    // Perlin noise
    const perlinTexture = useTexture("./perlin.png")
    perlinTexture.wrapS = THREE.RepeatWrapping
    perlinTexture.wrapT = THREE.RepeatWrapping

    // Fire Material
    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uPerlinTexture: new THREE.Uniform(perlinTexture)
    }), [perlinTexture])
    
    const fireMaterial = useRef()
    useFrame((state, delta) => {
        fireMaterial.current.uniforms.uTime.value += delta
    })

    return <group>
                <mesh   geometry={ chimney.nodes.Chimney.geometry }
                        position={ chimney.nodes.Chimney.position }
                        rotation={ chimney.nodes.Chimney.rotation }
                >
                    <meshBasicMaterial map={ chimneyBakedTexture } />
                </mesh>
                {/* Fire */}
                <mesh   position={[-1, -1.9, -2]}
                        scale={[1.5, 1.2, 3]}
                >
                    <planeGeometry  args={[1, 1, 16, 64]}
                        translate={[0, 0.5, 0]}
                    />
                    <shaderMaterial ref={ fireMaterial }
                        vertexShader={ fireVertexShader }
                        fragmentShader={ fireFragmentShader }
                        uniforms={ uniforms }
                        transparent
                        side={ THREE.DoubleSide }
                        depthWrite={ false }
                    />
                </mesh>
                <mesh   geometry={ chimney.nodes.Wooden_logs.geometry }
                        position={ chimney.nodes.Wooden_logs.position }
                        rotation={ chimney.nodes.Wooden_logs.rotation }
                >
                    <meshBasicMaterial map={ chimneyBakedTexture } />
                </mesh>
            </group>
}