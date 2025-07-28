import { Center } from "@react-three/drei"
import { Suspense } from "react"

// R3F Components
import Room from "./Room"
import Games from "./Games"
import Barrel from "./Barrel"
import Table from "./Table"
import Chimney from "./Chimney"
import Bench from "./Bench"
import Shelf from "./Shelf"
import Return from "./Return"

export default function Experience()
{
    return  <>
                {/* <Suspense
                    fallback={ <Riri /> }
                > */}
                <Return />
                <Center>
                    <Room />
                    <Games />
                    <Barrel />
                    <Table />
                    <Chimney />
                    <Bench />
                    <Shelf />
                </Center>
                {/* </Suspense> */}
            </>
}