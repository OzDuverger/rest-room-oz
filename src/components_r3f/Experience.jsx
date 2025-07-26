import { Center, PresentationControls, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"

// R3F Components
import Room from "./Room"
import Games from "./Games"
import Barrel from "./Barrel"
import Table from "./Table"
import Chimney from "./Chimney"
import Bench from "./Bench"
import Shelf from "./Shelf"

export default function Experience()
{
    return  <>
                {/* <Suspense
                    fallback={ <Riri /> }
                > */}
                {/* <OrbitControls makeDefault /> */}
                    <PresentationControls   global
                                            polar={ [-0.15, 0.25] }
                                            azimuth={ [-0.25, 0.25] }
                                            snap
                    >
                        <Center>
                            <Room />
                            <Games />
                            <Barrel />
                            <Table />
                            <Chimney />
                            <Bench />
                            <Shelf />
                        </Center>
                    </PresentationControls>
                {/* </Suspense> */}
            </>
}