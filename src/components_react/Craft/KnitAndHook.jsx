import { useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Text
import english from "../../texts/en/knit-and-hook.json"
import french from "../../texts/fr/knit-and-hook.json"

// Components
import Illustrated from "../usefull/Illustrated"

export default function KnitAndHook()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)
    
    const close = (event) => {
        if (app.focus === "Bench") {
            setApp({...app, information: null})
        }
    }

    // Knit var
    const [knit, setKnit] = useState(english)
    useEffect(() => {
        if (app.french) {
            setKnit(french)
        } else {
            setKnit(english)
        }
    }, [])

    return  <section id="knit-and-hook">
                <div className="background-section container">
                    <div className="close">
                        <img src="/svg/cross-circle.svg" alt="cross" onClick={ close }/>
                    </div>
                    <Illustrated data={ knit } mobile={ app.mobile } />
                </div>
            </section>
}