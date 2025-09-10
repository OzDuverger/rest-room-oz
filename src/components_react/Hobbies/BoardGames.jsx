import { useContext } from "react"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

// Text
import english from "../../texts/en/board-games.json"
import french from "../../texts/fr/board-games.json"

// Components
import Informations from "../usefull/Informations"

export default function BoardGames()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    // Games var
    const [games, setGames] = useState(english)
    useEffect(() => {
        if (app.french) {
            setGames(french)
        } else {
            setGames(english)
        }
    }, [])

    const close = (event) => {
        if (app.focus === "Shelf") {
            setApp({...app, information: null})
        }
    }

    return  <section id="board-games">
                <div className="background-section container">
                    <div className="close">
                        <img src="/svg/cross-circle.svg" alt="cross" onClick={ close }/>
                    </div>
                    <Informations data={ games } mobile={ app.mobile } />
                </div>
            </section>
}