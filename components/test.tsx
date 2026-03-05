"use client"
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Test = () => {
    return (
        <div>
            <Canvas style={{ position: "fixed" }}>
                <OrbitControls />
                <mesh position={[-1,0,0]} scale={2}>
                    <boxGeometry />
                    <meshStandardMaterial color="red" />
                </mesh>
                <mesh position={[1,0,0]}>
                    <boxGeometry />
                    <meshStandardMaterial color="red" />
                </mesh>
            </Canvas>
        </div>
    )
}

export default Test