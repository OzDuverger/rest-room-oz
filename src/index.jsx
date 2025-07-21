import "./style.scss"
import ReactDOM from "react-dom/client"
import { Canvas } from "@react-three/fiber"

// Context
import { AppProvider } from "./context/AppContext"

// R3F Components
import Experience from "./components_r3f/Experience"

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
    <AppProvider>
        <Canvas
            className="r3f"
            flat
            camera={ {
                fov: 45,
                near: 0.1,
                far: 50,
                position: [ 4, 1, 9 ]
            } }
        >
            <color args={ [ "#030202" ] } attach="background" />
            <Experience />
        </Canvas>
    </AppProvider>
)