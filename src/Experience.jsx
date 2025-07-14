import { Center, useTexture, useGLTF, OrbitControls } from '@react-three/drei'


export default function Experience()
{
    const room = useGLTF('./models/room.glb')

    const roomBakedTexture = useTexture('./textures/room-baked.jpg')
    const barrelBakedTexture = useTexture('./textures/barrel-baked.jpg')
    const tableBakedTexture = useTexture('./textures/table-baked.jpg')
    const chimneyBakedTexture = useTexture('./textures/chimney-baked.jpg')
    const benchBakedTexture = useTexture('./textures/bench-baked.jpg')
    const shelfBakedTexture = useTexture('./textures/shelf-baked.jpg')
    roomBakedTexture.flipY = false
    barrelBakedTexture.flipY = false
    tableBakedTexture.flipY = false
    chimneyBakedTexture.flipY = false
    benchBakedTexture.flipY = false
    shelfBakedTexture.flipY = false
    
    return <>

        <OrbitControls makeDefault />

        <Center>
            {/* Room */}
            <mesh geometry={ room.nodes.room.geometry } position={ room.nodes.room.position }>
                <meshBasicMaterial map={ roomBakedTexture } />
            </mesh>
            <mesh geometry={ room.nodes.wall_1.geometry } position={ room.nodes.wall_1.position }>
                <meshBasicMaterial map={ roomBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.wall_2.geometry }
                    position={ room.nodes.wall_2.position }
                    rotation={ room.nodes.wall_2.rotation }
            >
                <meshBasicMaterial map={ roomBakedTexture } />
            </mesh>
            {/* Game Cube */}
            <mesh   geometry={ room.nodes.game_cube_1.geometry }
                    position={ room.nodes.game_cube_1.position }
                    rotation={ room.nodes.game_cube_1.rotation }
            >
                <meshBasicMaterial map={ roomBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.game_cube_2.geometry }
                    position={ room.nodes.game_cube_2.position }
                    rotation={ room.nodes.game_cube_2.rotation }
            >
                <meshBasicMaterial map={ roomBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.game_cube_3.geometry }
                    position={ room.nodes.game_cube_3.position }
                    rotation={ room.nodes.game_cube_3.rotation }
            >
                <meshBasicMaterial map={ roomBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.game_cube_4.geometry }
                    position={ room.nodes.game_cube_4.position }
                    rotation={ room.nodes.game_cube_4.rotation }
            >
                <meshBasicMaterial map={ roomBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.carpet.geometry }
                    position={ room.nodes.carpet.position }
                    rotation={ room.nodes.carpet.rotation }
            >
                <meshBasicMaterial map={ roomBakedTexture } />
            </mesh>
            {/* Barrel */}
            <mesh   geometry={ room.nodes.Barrel.geometry }
                    position={ room.nodes.Barrel.position }
                    rotation={ room.nodes.Barrel.rotation }
            >
                <meshBasicMaterial map={ barrelBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.Bottle_cylinder.geometry }
                    position={ room.nodes.Bottle_cylinder.position }
                    rotation={ room.nodes.Bottle_cylinder.rotation }
            >
                <meshBasicMaterial map={ barrelBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.Bottle_icosphere.geometry }
                    position={ room.nodes.Bottle_icosphere.position }
                    rotation={ room.nodes.Bottle_icosphere.rotation }
            >
                <meshBasicMaterial map={ barrelBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.Bottle_triangle.geometry }
                    position={ room.nodes.Bottle_triangle.position }
                    rotation={ room.nodes.Bottle_triangle.rotation }
            >
                <meshBasicMaterial map={ barrelBakedTexture } />
            </mesh>
            {/* Table */}
            <mesh   geometry={ room.nodes.Table.geometry }
                    position={ room.nodes.Table.position }
                    rotation={ room.nodes.Table.rotation }
            >
                <meshBasicMaterial map={ tableBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.laptop.geometry }
                    position={ room.nodes.laptop.position }
                    rotation={ room.nodes.laptop.rotation }
            >
                <meshBasicMaterial map={ tableBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.screen.geometry }
                    position={ room.nodes.screen.position }
                    rotation={ room.nodes.screen.rotation }
            >
                <meshBasicMaterial map={ tableBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.mug.geometry }
                    position={ room.nodes.mug.position }
                    rotation={ room.nodes.mug.rotation }
            >
                <meshBasicMaterial map={ tableBakedTexture } />
            </mesh>
            {/* Chimney */}
            <mesh   geometry={ room.nodes.Chimney.geometry }
                    position={ room.nodes.Chimney.position }
                    rotation={ room.nodes.Chimney.rotation }
            >
                <meshBasicMaterial map={ chimneyBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.Wooden_logs.geometry }
                    position={ room.nodes.Wooden_logs.position }
                    rotation={ room.nodes.Wooden_logs.rotation }
            >
                <meshBasicMaterial map={ chimneyBakedTexture } />
            </mesh>
            {/* Bench */}
            <mesh   geometry={ room.nodes.Hammer.geometry }
                    position={ room.nodes.Hammer.position }
                    rotation={ room.nodes.Hammer.rotation }
            >
                <meshBasicMaterial map={ benchBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.Spanner_Wrench_3.geometry }
                    position={ room.nodes.Spanner_Wrench_3.position }
                    rotation={ room.nodes.Spanner_Wrench_3.rotation }
            >
                <meshBasicMaterial map={ benchBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.screw_driver_3.geometry }
                    position={ room.nodes.screw_driver_3.position }
                    rotation={ room.nodes.screw_driver_3.rotation }
            >
                <meshBasicMaterial map={ benchBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.Bench.geometry }
                    position={ room.nodes.Bench.position }
                    rotation={ room.nodes.Bench.rotation }
            >
                <meshBasicMaterial map={ benchBakedTexture } />
            </mesh>
            {/* Shelf */}
            <mesh   geometry={ room.nodes.Bookshelf.geometry }
                    position={ room.nodes.Bookshelf.position }
                    rotation={ room.nodes.Bookshelf.rotation }
            >
                <meshBasicMaterial map={ shelfBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.Blue_Book_2.geometry }
                    position={ room.nodes.Blue_Book_2.position }
                    rotation={ room.nodes.Blue_Book_2.rotation }
            >
                <meshBasicMaterial map={ shelfBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.Green_Book_1.geometry }
                    position={ room.nodes.Green_Book_1.position }
                    rotation={ room.nodes.Green_Book_1.rotation }
            >
                <meshBasicMaterial map={ shelfBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.Orange_Book_2.geometry }
                    position={ room.nodes.Orange_Book_2.position }
                    rotation={ room.nodes.Orange_Book_2.rotation }
            >
                <meshBasicMaterial map={ shelfBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.Red_Book_4.geometry }
                    position={ room.nodes.Red_Book_4.position }
                    rotation={ room.nodes.Red_Book_4.rotation }
            >
                <meshBasicMaterial map={ shelfBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.seven_wonders.geometry }
                    position={ room.nodes.seven_wonders.position }
                    rotation={ room.nodes.seven_wonders.rotation }
            >
                <meshBasicMaterial map={ shelfBakedTexture } />
            </mesh>
            <mesh   geometry={ room.nodes.teddy_bear.geometry }
                    position={ room.nodes.teddy_bear.position }
                    rotation={ room.nodes.teddy_bear.rotation }
            >
                <meshBasicMaterial map={ shelfBakedTexture } />
            </mesh>
        </Center>

    </>
}