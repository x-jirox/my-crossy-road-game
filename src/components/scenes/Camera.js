import * as THREE from "three"

export function Camera() {

    
    const size = 500;
    const viewRatio = window.innerHeight / window.innerWidth;
    const width = viewRatio < 1 ? size : size * viewRatio;
    const height = viewRatio < 1 ? size / viewRatio : size;

    const camera = new THREE.OrthographicCamera(
        width / -2,
        width / 2,
        height / 2,
        height / -2,
        100,
        900
    );

  
    camera.up.set(0, 0 , 1);
    camera.position.set(300, -300, 300);
    camera.lookAt(0, 0, 0);

    return camera;
}