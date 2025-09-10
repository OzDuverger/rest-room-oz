import { useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Text
import english from "../../texts/en/music.json"
import french from "../../texts/fr/music.json"

// Components
import Informations from "../usefull/Informations"

export default function Music()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    // Music var
    const [music, setMusic] = useState(english)
    useEffect(() => {
        if (app.french) {
            setMusic(french)
        } else {
            setMusic(english)
        }
    }, [])

    const close = (event) => {
        if (app.focus === "Shelf") {
            setApp({...app, information: null})
        }
    }

    return  <section id="music">
                <div className="background-section container">
                    <div className="close">
                        <img src="/svg/cross-circle.svg" alt="cross" onClick={ close }/>
                    </div>
                    <Informations data={ music } mobile={ app.mobile } />
                </div>
            </section>
}