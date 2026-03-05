import { environmentPaths, ShirtType, studioTexture } from "@/lib/texture";
import { useGLTF, useTexture } from "@react-three/drei";

const AssetsPreload = () => {
    useGLTF.preload("/models/main/MainStudio.glb");
    useGLTF.preload("/models/white/WhiteStudio.glb");
    useGLTF.preload("/models/sport/SportStudio.glb");
    useGLTF.preload("/models/gray/GrayStudio.glb");
    useGLTF.preload("/models/ShirtScrolling.glb");

    Object.values(studioTexture.main).forEach((path) => {
        if (typeof path === "string") {
            useTexture.preload(path);
        }
    });

    (Object.keys(studioTexture.shirts) as ShirtType[]).forEach((shirtType) => {
        const shirtSection = studioTexture.shirts[shirtType];
        Object.values(shirtSection).forEach((section) => {
            if (typeof section === "object" && section !== null) {
                Object.values(section).forEach((texturePath) => {
                    if (typeof texturePath === "string") useTexture.preload(texturePath);
                });
            }
        });
    });

    const cubeSides = [
        "px.png",
        "nx.png",
        "py.png",
        "ny.png",
        "pz.png",
        "nz.png",
    ];

    (Object.keys(environmentPaths) as ShirtType[]).forEach((shirtType) => {
        cubeSides.forEach((side) => {
            useTexture.preload(`${environmentPaths[shirtType]}${side}`);
        });
    });
    return null;
};

export default AssetsPreload;
