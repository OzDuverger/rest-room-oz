import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contact({ template })
{
    // Email
    const formRef = useRef()
    const [messageSent, setMessageSent] = useState(false)

    const contact = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            VITE_EMAILJS_SERVICE_ID,
            (template === "bartender" ? VITE_EMAILJS_TEMPLATE_BARTENDER_ID : VITE_EMAILJS_TEMPLATE_GAME_MASTER_ID),
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

    return  <form className="contact-form" ref={ formRef } onSubmit={ contact }>
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
}