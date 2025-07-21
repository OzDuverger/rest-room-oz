import { useEffect } from "react"

export default function Presentation(
    {
        chat,
        nextChat
    }
)
{
    useEffect(() => {
        document.addEventListener("keydown", nextChat, true)
    }, [])

    return  <>
                <section id="presentation">
                    <div className="chat">{ chat }</div>
                    <div className="next">Press Enter</div>
                </section>
            </>
}