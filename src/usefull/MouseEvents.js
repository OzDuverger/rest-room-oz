export function eventOnPointerEnterHandler(app, validFocus, setApp, hover)
{
    if (app.focus === validFocus) {
        document.body.style.cursor = "pointer"
        setApp({...app, hover: hover })
    }
}

export function eventOnPointerLeaveHandler(app, setApp)
{
    document.body.style.cursor = "default"
    setApp({...app, hover: null })
}