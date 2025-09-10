import { useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Text
import english from "../../texts/en/sports.json"
import french from "../../texts/fr/sports.json"

// Components
import Informations from "../usefull/Informations"

export default function Sport()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    // Sports var
    const [sports, setSports] = useState(english)
    useEffect(() => {
        if (app.french) {
            setSports(french)
        } else {
            setSports(english)
        }
    }, [])

    const close = (event) => {
        if (app.focus === "Shelf") {
            setApp({...app, information: null})
        }
    }

    return  <section id="sport">
                <div className="background-section container">
                    <div className="close">
                        <img src="/svg/cross-circle.svg" alt="cross" onClick={ close }/>
                    </div>
                    <Informations data={ sports } mobile={ app.mobile } />
                </div>
            </section>
}