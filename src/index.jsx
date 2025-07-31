import "./style.scss"
import ReactDOM from "react-dom/client"
import { Canvas } from "@react-three/fiber"
import { camInitPos, camInitRot } from "./usefull/Camera"

// Context
import { AppProvider } from "./context/AppContext"

// React Components
import HtmlExperience from "./components_react/HtmlExperience"

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
                position: [ camInitPos.x, camInitPos.y, camInitPos.z ],
                rotation: [ camInitRot.x, camInitRot.y, camInitRot.z ]
            } }
        >
            <color args={ [ "#030202" ] } attach="background" />
            <Experience />
        </Canvas>
        <HtmlExperience />
    </AppProvider>
)