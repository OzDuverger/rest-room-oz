import { useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Text
import english from "../../texts/en/activities.json"
import french from "../../texts/fr/activities.json"

// Components
import Illustrated from "../usefull/Illustrated"

export default function Activities()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    
    // Activities var
    const [activities, setActivities] = useState(english)
    useEffect(() => {
        if (app.french) {
            setActivities(french)
        } else {
            setActivities(english)
        }
    }, [])

    const close = (event) => {
        if (app.focus === "Games") {
            setApp({...app, information: null})
        }
    }

    return  <section id="receipes">
                <div className="background-section container">
                    <div className="close">
                        <img src="/svg/cross-circle.svg" alt="cross" onClick={ close }/>
                    </div>
                    <Illustrated data={ activities } mobile={ app.mobile } />
                </div>
            </section>
}