import { gsap } from "gsap"

export const camInitPos = { x: 6, y: 1, z: 12 }
export const camInitRot = { x: -0.08, y: 0.46, z: 0.04 }

// Mobile part
export const camInitPosMobile = { x: 7, y: 1, z: 15 }

export function camGoesTo(camera, pos = { x: 6, y: 1, z: 12 }, rot = null)
{
    const tl = gsap.timeline()

    tl.to(camera.position, {
        x: pos.x,
        y: pos.y,
        z: pos.z,
        duration: 2
    }, 0)
    if (rot !== null) {
        tl.to(camera.rotation, {
            x: rot.x,
            y: rot.y,
            duration: 2
        }, 0)
    }
}