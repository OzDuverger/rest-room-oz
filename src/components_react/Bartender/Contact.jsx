import { useContext, useRef, useState } from "react"
import emailjs from "@emailjs/browser"

// Context
import { AppContext, AppSetterContext } from "../../context/AppContext"

export default function BarContact()
{
    // Get Context
    const app = useContext(AppContext)
    const setApp = useContext(AppSetterContext)

    // Email
    const formRef = useRef()
    const [messageSent, setMessageSent] = useState(false)

    const contact = (e) => {
        e.preventDefault()

        // console.log(formRef.current)

        emailjs
        .sendForm(
            VITE_EMAILJS_SERVICE_ID,
            VITE_EMAILJS_TEMPLATE_BARTENDER_ID,
            formRef.current,
            { publicKey: VITE_EMAILJS_PUBLIC_KEY }
        )
        .then(
            () => {
                console.log("SUCCESS")
                setMessageSent(true)
                setTimeout(() => { setMessageSent(false) }, 2000)
            },
            (error) => {
                console.log("FAILED : " + error.text)
            }
        )
    }

    const close = (event) => {
        if (app.focus === "Barrel") {
            setApp({...app, information: null})
        }
    }

    return  <section id="bar-contact">
                <div className="background-section container">
                    <div className="close">
                        <img src="/svg/cross-circle.svg" alt="cross" onClick={ close }/>
                    </div>
                    <form className="contact-form" ref={ formRef } onSubmit={ contact }>
                        <div className="datum">
                            <label>Name</label>
                            <input type="text" name="user_name" />
                        </div>
                        <div className="datum">
                            <label>Email</label>
                            <input type="email" name="user_email" />
                        </div>
                        <div className="datum">
                            <label>Message</label>
                            <textarea name="message" />
                        </div>
                        <button type="submit">Contact</button>
                        <div className={ messageSent ? "message-sent" : "waiting"}>Message Sent !</div>
                    </form>
                </div>
            </section>
}