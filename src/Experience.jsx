import { Center, OrbitControls } from '@react-three/drei'

import Room from "./Room"
import Games from "./Games"
import Barrel from "./Barrel"
import Table from "./Table"
import Chimney from "./Chimney"
import Bench from "./Bench"
import Shelf from "./Shelf"

export default function Experience()
{
    return <>

        <OrbitControls makeDefault />

        <Center>
            {/* Room */}
            <Room />
            {/* Game Cube */}
            <Games />
            {/* Barrel */}
            <Barrel />
            {/* Table */}
            <Table />
            {/* Chimney */}
            <Chimney />
            {/* Bench */}
            <Bench />
            {/* Shelf */}
            <Shelf />
        </Center>

    </>
}