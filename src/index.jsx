import "./style.scss"
import ReactDOM from "react-dom/client"
import { AppProvider } from "./context/AppContext"
import { Canvas } from "@react-three/fiber"
import Experience from "./components_r3f/Experience"
import Chat from "./components_react/Chat"

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
    <AppProvider>
        <Canvas
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
        {/* <Chat /> */}
    </AppProvider>
)