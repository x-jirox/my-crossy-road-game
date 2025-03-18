import * as THREE from "three"

export function Renderer() {
    const canvas = document.querySelector("canvas.game");
    if (!canvas) throw new Error("Canvas not found");

    // new THREE.WebGLRenderer({...})
    //      Crea un renderizador WebGL que se encargará de dibujar la escena en el canvas.
    // Propiedades:
    //      alpha: true → Hace que el fondo del renderizador sea transparente.
    //      antialias: true → Suaviza los bordes de los objetos (evita que se vean pixelados).
    //      canvas: canvas → Usa el canvas seleccionado en lugar de crear uno nuevo.
    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: canvas,
    });

    // setPixelRatio(window.devicePixelRatio)
    //      Ajusta la resolución del renderizador según el dispositivo, lo que mejora la calidad en pantallas con alta densidad de píxeles (como Retina Display).
    // setSize(window.innerWidth, window.innerHeight)
    //      Establece el tamaño del renderizador para que ocupe toda la ventana.
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true;

    return renderer;
}