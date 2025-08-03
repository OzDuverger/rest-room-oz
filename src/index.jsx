import "./style.scss"
import ReactDOM from "react-dom/client"

// Context
import { AppProvider } from "./context/AppContext"

// RTF Component
import Container from "./components_r3f/Container"

// React Component
import HtmlExperience from "./components_react/HtmlExperience"


const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
    <AppProvider>
        <Container />
        <HtmlExperience />
    </AppProvider>
)