import { useContext } from "react"
import { AppSetterContext } from "../context/AppContext"

export default function Riri()
{
    // Get app context setter
    const setApp = useContext(AppSetterContext)

    return  <>
    {/* DEBUG !!! */}
                <mesh position-y={ 0.5 } scale={ [ 2, 3, 2 ] }><boxGeometry args={ [ 1, 1, 1, 2, 2, 2 ] } /><meshBasicMaterial wireframe color="red" /></mesh>
    {/* DEBUG !!! */}
                riri
            </>
}