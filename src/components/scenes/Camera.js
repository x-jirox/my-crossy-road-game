import * as THREE from "three"

export function Camera() {

    // size = 300;
    //      Define un tamaño base para la cámara.
    // viewRatio = window.innerHeight / window.innerWidth;
    //      Calcula la relación de aspecto de la ventana del navegador.
    // Determina el ancho y alto del volumen de la cámara:
    //      Si la ventana es más ancha que alta (viewRatio < 1), se mantiene el ancho y se ajusta la altura.
    //      Si la ventana es más alta que ancha (viewRatio >= 1), se ajusta el ancho en función de la relación de aspecto.
    const size = 300;
    const viewRatio = window.innerHeight / window.innerWidth;
    const width = viewRatio < 1 ? size : size * viewRatio;
    const height = viewRatio < 1 ? size / viewRatio : size;

    // THREE.OrthographicCamera(left, right, top, bottom, near, far)
    //      left = width / -2, right = width / 2 → Define los límites laterales de la vista.
    //      top = height / 2, bottom = height / -2 → Define los límites verticales de la vista.
    //      near = 100, far = 900 → Define el rango de profundidad visible.
    const camera = new THREE.OrthographicCamera(
        width / -2,
        width / 2,
        height / 2,
        height / -2,
        100,
        900
    );

    // camera.up.set(0, 0, 1);
    //      Define que el eje Z es "arriba" en lugar del eje Y (por defecto en Three.js).
    // camera.position.set(300, -300, 300);
    //      Ubica la cámara en (x=300, y=-300, z=300).
    // camera.lookAt(0, 0, 0);
    //      Apunta la cámara al origen (0,0,0).
    camera.up.set(0, 0, 1);
    camera.position.set(300, -300, 300);
    camera.lookAt(0, 0, 0);

    return camera;
}