import * as THREE from "three"
import { tilesPerRow, tileSize } from "../../constants"

export function Grass(rowIndex) {

    // THREE.Group() agrupa objetos 3D para manipularlos juntos.
    // grass.position.y = rowIndex * tileSize;
    //      Ubica la fila de pasto en la posición correcta en el eje Y, dependiendo del índice de la fila.
    const grass = new THREE.Group();
    grass.position.y = rowIndex * tileSize;

    // THREE.BoxGeometry(width, height, depth)
    // width = tilesPerRow * tileSize
    //      La base cubre toda la fila (17 tiles * 42 unidades = 714 unidades de ancho).
    // height = tileSize
    //      La fila tiene una altura de 42 unidades.
    // depth = 3
    //      Define un grosor de 3 unidades.
    // THREE.MeshLambertMaterial({ color: 0xbaf455 })
    //      Usa un material Lambertiano, ideal para iluminación difusa.
    //      El color 0xbaf455 (verde claro) representa el pasto.
    const foundation = new THREE.Mesh(
        new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize, 3),
        new THREE.MeshLambertMaterial({ color: 0xbaf455 })
    );

    //Eleva la base de pasto 1.5 unidades sobre el suelo (ya que su grosor es 3, esto la sitúa en la mitad de su altura).
    foundation.position.z = 1.5;
    foundation.receiveShadow = true;
    grass.add(foundation);

    return grass;
}