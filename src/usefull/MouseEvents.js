export function eventOnPointerEnterHandler(app, validFocus, setApp, hover, hoverTime = 1)
{
    if (app.focus === validFocus) {
        document.body.style.cursor = "pointer"
        setApp({...app, hover: hover, hoverTime: hoverTime })
    }
}

export function eventOnPointerLeaveHandler(app, setApp)
{
    document.body.style.cursor = "default"
    setApp({...app, hover: null })
}