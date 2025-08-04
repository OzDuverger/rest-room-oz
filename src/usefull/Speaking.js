import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"

export function speaking(ref, timeChat, chat)
{
    gsap.registerPlugin(TextPlugin)
    
    let SpeakSound = new Audio()
    switch(timeChat) {
        case 2:
            SpeakSound = new Audio("./sounds/sound-effect-toriel-2sec.mp3")
            break
        case 3:
            SpeakSound = new Audio("./sounds/sound-effect-toriel-3sec.mp3")
            break
        case 4:
            SpeakSound = new Audio("./sounds/sound-effect-toriel-4sec.mp3")
            break
        default:
            SpeakSound = new Audio("./sounds/sound-effect-toriel-1sec.mp3")
    }
    SpeakSound.volume = 0.5
    
    SpeakSound.play()

    const tl = gsap.timeline()

    tl.to(ref, {
        text: '',
        duration: 0
    }, 0)
    tl.to(ref, {
        duration: timeChat,
        text: chat
    }, 0.1)
}