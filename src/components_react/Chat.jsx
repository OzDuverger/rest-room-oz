import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"

export default function Chat()
{
    const [chat, setChat] = useState(null)
    const app = useContext(AppContext)

    useEffect(() => {
        app.hover ? setChat(app.hover) : setChat(null)
    }, [app.hover])

    return  chat ? (<section id="chat">
                        <div className="chat container">
                            { chat }
                        </div>
                    </section>)
                :  (<></>)
}