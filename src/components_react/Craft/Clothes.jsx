import { useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Text
import english from "../../texts/en/clothes.json"
import french from "../../texts/fr/clothes.json"

// Components
import Illustrated from "../usefull/Illustrated"

export default function Clothes()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    // Clothes var
    const [clothes, setClothes] = useState(english)
    useEffect(() => {
        if (app.french) {
            setClothes(french)
        } else {
            setClothes(english)
        }
    }, [])

    const close = (event) => {
        if (app.focus === "Bench") {
            setApp({...app, information: null})
        }
    }
    
    return  <section id="clothes">
                <div className="background-section container">
                    <div className="close">
                        <img src="/svg/cross-circle.svg" alt="cross" onClick={ close }/>
                    </div>
                    <Illustrated data={ clothes } mobile={ app.mobile } />
                </div>
            </section>
}