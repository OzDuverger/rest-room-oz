import { useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Texts
import english from "../../texts/en/animator-experiences.json"
import french from "../../texts/fr/animator-experiences.json"

// Components
import Informations from "../usefull/Informations"

export default function GameMasterExperiences()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    // Experiences var
    const [experiences, setExperiences] = useState(english)
    useEffect(() => {
        if (app.french) {
            setExperiences(french)
        } else {
            setExperiences(english)
        }
    }, [])

    const close = (event) => {
        if (app.focus === "Games") {
            setApp({...app, information: null})
        }
    }

    return  <section id="animator-experiences">
                <div className="background-section container">
                    <div className="close">
                        <img src="/svg/cross-circle.svg" alt="cross" onClick={ close }/>
                    </div>
                    <a class="link" href="/cv/cv_oz_duverger-animateur-Game-Master.pdf" download="cv_oz_duverger-animateur-Game-Master.pdf">Download my CV !</a>
                    <Informations data={ experiences } mobile={ app.mobile } />
                </div>
            </section>
}