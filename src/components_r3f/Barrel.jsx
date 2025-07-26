import { useTexture, useGLTF } from "@react-three/drei"
import { useContext } from "react"
import { AppSetterContext } from "../context/AppContext"
import { useThree } from "@react-three/fiber"
import { gsap } from "gsap"

export default function Barrel()
{
    // Get app context setter
    const setApp = useContext(AppSetterContext)

    // Camera
    const { gl, camera } = useThree()
    const initialPos = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z
    }

    // Load model
    const barrel = useGLTF("./models/barrel.glb")

    // Load texture
    const barrelBakedTexture = useTexture('./textures/barrel-baked.jpg')
    barrelBakedTexture.flipY = false

    // Mouse events handlers
    const eventOnPointerEnterHandler = (event) => {

        document.body.style.cursor = "pointer"
        setApp({ hover: "Barrel" })
    }
    
    const eventOnPointerLeaveHandler = (event) => {

        document.body.style.cursor = "default"
        setApp({ hover: null })
    }
    
    const eventOnClick = (event) => {
        const tl = gsap.timeline()
        tl.to(camera.position, {
            x: -0.15,
            y: -1.20,
            z: 2.25,
            duration: 2
        }, 0)
        tl.to(camera.rotation, {
            x: -0.05,
            y: 1.3,
            duration: 2
        }, 0)
    }

    return  <group  onPointerEnter={ eventOnPointerEnterHandler }
                    onPointerLeave={ eventOnPointerLeaveHandler }
                    onClick={ eventOnClick }
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