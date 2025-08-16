import "./style.scss"
import ReactDOM from "react-dom/client"

// Context
import { AppProvider } from "./context/AppContext"

// RTF Component
import Container from "./components_r3f/Container"

// React Component
import HtmlExperience from "./components_react/HtmlExperience"

function setRealHeight() {
    // calcul : 1vh in real pixel
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// Init
setRealHeight();

// On recalcule à chaque resize/orientationchange
window.addEventListener("resize", setRealHeight);
window.addEventListener("orientationchange", setRealHeight);

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
    <AppProvider>
        <Container />
        <HtmlExperience />
    </AppProvider>
)