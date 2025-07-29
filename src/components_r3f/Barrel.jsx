import { useTexture, useGLTF } from "@react-three/drei"
import { useContext, useEffect, useState } from "react"
import { AppContext, AppSetterContext } from "../context/AppContext"
import { useThree } from "@react-three/fiber"
import { camGoesTo } from "../usefull/Camera"

export default function Barrel()
{
    // Camera
    const { gl, camera } = useThree()

    // Get app context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    // Load model
    const barrel = useGLTF("./models/barrel.glb")

    // Load texture
    const barrelBakedTexture = useTexture('./textures/barrel-baked.jpg')
    barrelBakedTexture.flipY = false

    // Mouse events handlers
    const eventOnPointerEnterHandler = (event) => {

        if (app.focus === null) {
            document.body.style.cursor = "pointer"
            setApp({...app, hover: "Barrel" })
        }
    }
    
    const eventOnPointerLeaveHandler = (event) => {

        document.body.style.cursor = "default"
        setApp({...app, hover: null })
    }
    
    const eventOnClick = (event) => {
        const pos = {
            x: -0.15,
            y: -1.2,
            z: 2.25
        }
        const rot = {
            x: -0.05,
            y: 1.3,
            z: 0
        }
        camGoesTo(camera, pos, rot)
        setApp({...app, focus: "Barrel"})
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