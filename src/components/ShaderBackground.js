import React, { useEffect, useRef } from 'react';

const VERTEX_SHADER_SOURCE = `
attribute vec2 position;

void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER_SOURCE = `
precision highp float;

uniform float time;
uniform vec2 resolution;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;

    for (int i = 0; i < 5; i++) {
        value += amplitude * noise(p);
        p = p * 2.0 + vec2(12.3, 4.7);
        amplitude *= 0.5;
    }

    return value;
}

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 p = uv * 2.0 - 1.0;
    p.x *= resolution.x / resolution.y;

    float t = time * 0.22;

    vec2 warp = vec2(
        fbm(p * 1.8 + vec2(t, -t * 0.6)),
        fbm(p * 1.8 + vec2(-t * 0.5, t))
    );
    p += (warp - 0.5) * 0.35;

    vec2 c1 = vec2(-0.45 + sin(t * 1.3) * 0.15, 0.12 + cos(t * 0.9) * 0.22);
    vec2 c2 = vec2(0.42 + cos(t * 1.1) * 0.16, -0.18 + sin(t * 0.7) * 0.18);
    vec2 c3 = vec2(0.0 + sin(t * 0.6) * 0.08, 0.38 + cos(t * 1.2) * 0.14);

    float glow = 0.22 / (length(p - c1) + 0.2) + 0.2 / (length(p - c2) + 0.22) + 0.12 / (length(p - c3) + 0.28);
    glow += fbm(p * 2.3 + t * 0.35) * 0.25;

    vec3 deep = vec3(0.01, 0.02, 0.06);
    vec3 blue = vec3(0.03, 0.2, 0.75);
    vec3 accent = vec3(0.36, 0.72, 1.0);

    vec3 color = mix(deep, blue, smoothstep(0.08, 0.9, glow));
    color += accent * pow(max(glow - 0.25, 0.0), 1.35) * 0.55;

    float vignette = smoothstep(1.35, 0.25, length(p));
    color *= vignette;

    gl_FragColor = vec4(color, 1.0);
}
`;

const createShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    if (!shader) return null;

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    return shader;
};

const createProgram = (gl, vertexShader, fragmentShader) => {
    const program = gl.createProgram();
    if (!program) return null;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
    }

    return program;
};

const ShaderBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return undefined;

        const gl = canvas.getContext('webgl', {
            alpha: false,
            antialias: false,
            depth: false,
            stencil: false,
            powerPreference: 'high-performance',
        });

        if (!gl) {
            canvas.classList.add('shader-bg-disabled');
            return undefined;
        }

        const vertexShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);
        if (!vertexShader || !fragmentShader) return undefined;

        const program = createProgram(gl, vertexShader, fragmentShader);
        if (!program) return undefined;

        const positionLocation = gl.getAttribLocation(program, 'position');
        const timeLocation = gl.getUniformLocation(program, 'time');
        const resolutionLocation = gl.getUniformLocation(program, 'resolution');

        const quad = new Float32Array([-1, -1, 3, -1, -1, 3]);
        const quadBuffer = gl.createBuffer();
        if (!quadBuffer) return undefined;

        gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

        let frameId = 0;
        const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        const resizeCanvas = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const width = Math.max(1, Math.floor(window.innerWidth * dpr));
            const height = Math.max(1, Math.floor(window.innerHeight * dpr));

            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
            }
        };

        const render = (now) => {
            resizeCanvas();
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.useProgram(program);

            gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            if (timeLocation) gl.uniform1f(timeLocation, now * 0.001);
            if (resolutionLocation) gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

            gl.drawArrays(gl.TRIANGLES, 0, 3);
        };

        const animate = (now) => {
            render(now);
            frameId = window.requestAnimationFrame(animate);
        };

        const handleResize = () => render(performance.now());
        const handleMotionChange = (event) => {
            window.cancelAnimationFrame(frameId);
            frameId = 0;

            if (event.matches) {
                render(performance.now());
                return;
            }

            frameId = window.requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);

        if (reducedMotionQuery.addEventListener) {
            reducedMotionQuery.addEventListener('change', handleMotionChange);
        } else {
            reducedMotionQuery.addListener(handleMotionChange);
        }

        if (reducedMotionQuery.matches) {
            render(performance.now());
        } else {
            frameId = window.requestAnimationFrame(animate);
        }

        return () => {
            window.cancelAnimationFrame(frameId);
            window.removeEventListener('resize', handleResize);

            if (reducedMotionQuery.removeEventListener) {
                reducedMotionQuery.removeEventListener('change', handleMotionChange);
            } else {
                reducedMotionQuery.removeListener(handleMotionChange);
            }

            gl.deleteBuffer(quadBuffer);
            gl.deleteProgram(program);
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);
        };
    }, []);

    return <canvas ref={canvasRef} className="shader-bg-canvas" aria-hidden="true" />;
};

export default ShaderBackground;
