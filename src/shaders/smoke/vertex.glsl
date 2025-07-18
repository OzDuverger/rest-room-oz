uniform float uTime;
uniform sampler2D uPerlinTexture;

varying vec2 vUv;

#include ../includes/rotate2D.glsl

void main()
{
    // Final position
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    // Varyings
    vUv = uv;
}