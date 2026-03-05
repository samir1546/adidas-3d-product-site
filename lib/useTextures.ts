import * as THREE from "three"
import {  useTexture, useVideoTexture } from "@react-three/drei"
import { environmentPaths, SectionType, ShirtType, studioTexture, videoTextures } from "./texture"
import { useMemo } from "react";


export const useMainStudioTextures = () => {
    return useModifiedTextures(studioTexture.main, true);
};

export const useShirtSectionTextures = (
    shirtType: ShirtType,
    section: SectionType,
    setModifier = true
) => {
    const paths = studioTexture.shirts[shirtType][section];
    return useModifiedTextures(paths, setModifier);
};

export const useShirtEvnCube = (shirtType: ShirtType) => {
    const path = environmentPaths[shirtType];
    // return useCubeTexture(
    //   ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
    //   { path }
    // );
    const env = useMemo(() => {
        const tex = new THREE.CubeTextureLoader()
            .setPath(path)
            .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);
        tex.colorSpace = THREE.SRGBColorSpace;
        return tex;
    }, [path]);
    return env;
};


export const useShirtVideoTexture = (shirtType: ShirtType) => {
    const path = videoTextures[shirtType];
    return useVideoTexture(path);
};


function useModifiedTextures(
    paths: Record<string, string>,
    setModifier: boolean
) {
    const textures = useTexture(paths);
    if (setModifier)
        Object.values(textures).forEach((tex) => {
            tex.flipY = false;
            tex.colorSpace = THREE.SRGBColorSpace;
        });
    return textures
}

