import * as THREE from "three"
import { useGLTF, useMask } from '@react-three/drei'
import { useShirtSectionTextures } from "@/lib/useTextures"
import { createMaterials } from "@/lib/material"
import { TextureKey } from "@/lib/texture"
import Masking from "./Masking"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import useFirstAnimation from "@/lib/useFirstAnimation"
type GLTFResult = {
    nodes: {
        [name: string]: THREE.Mesh
    }
}
export function FirstGrayModel() {
    const { nodes } = useGLTF('/models/gray/GrayStudio.glb') as unknown as GLTFResult
    
    const stencil = useMask(1);

    const shirtRef = useRef<THREE.Mesh>(null)
    const groupRef = useRef<THREE.Group>(null)
    const maskRef = useRef<THREE.Mesh>(null)

    const texturs = useShirtSectionTextures("gray", "first")
    const mats = createMaterials(texturs, stencil) as Record<
        TextureKey<"gray", "first">,
        THREE.MeshBasicMaterial
    >;

    useFirstAnimation(groupRef, shirtRef, maskRef);

    return (
        <group >
            <Masking ref={maskRef} />
            <group ref={groupRef} dispose={null}>
                <mesh
                    ref={shirtRef}
                    geometry={nodes.Shirt_Gray.geometry}
                    position={[0, 0.7, 0]}
                    material={mats.shirt}
                />
                <mesh geometry={nodes.Floor.geometry} material={mats.floor} />
                <mesh geometry={nodes.Wall.geometry} material={mats.wall} />
                <mesh geometry={nodes.Asset.geometry} material={mats.assets} />
            </group>
        </group>
    )
}

useGLTF.preload('/models/gray/GrayStudio.glb')