import * as THREE from "three";
import { minTileIndex, maxTileIndex } from "../constants";

/**
 * Genera una cantidad específica de filas con datos aleatorios.
 * @param {number} amount - Número de filas a generar.
 * @returns {Array} - Lista de filas generadas.
 */
export function generateRows(amount) {
  const rows = [];
  for (let i = 0; i < amount; i++) {
    const rowData = generateRow();
    rows.push(rowData);
  }
  return rows;
}

/**
 * Genera una fila con un tipo aleatorio (carro, camión o bosque).
 * @returns {Object} - Datos de la fila generada.
 */
function generateRow() {
  const type = randomElement(["car", "truck", "forest"]);
  if (type === "car") return generateCarLaneMetadata();
  if (type === "truck") return generateTruckLaneMetadata();
  return generateForestMetadata();
}

/**
 * Obtiene un elemento aleatorio de un array.
 * @param {Array} array - Lista de elementos.
 * @returns {*} - Elemento aleatorio del array.
 */
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Genera los datos de una fila de bosque con árboles en posiciones aleatorias.
 * @returns {Object} - Metadatos de la fila de bosque.
 */
function generateForestMetadata() {
  const occupiedTiles = new Set(); // Para evitar posiciones repetidas
  const trees = Array.from({ length: 4 }, () => {
    let tileIndex;
    do {
      tileIndex = THREE.MathUtils.randInt(minTileIndex, maxTileIndex);
    } while (occupiedTiles.has(tileIndex));
    occupiedTiles.add(tileIndex);

    const height = randomElement([20, 45, 60]); // Altura aleatoria del árbol

    return { tileIndex, height };
  });

  return { type: "forest", trees };
}

/**
 * Genera los datos de una fila de carril con coches.
 * @returns {Object} - Metadatos del carril con coches.
 */
function generateCarLaneMetadata() {
  const direction = randomElement([true, false]); // Dirección de los coches
  const speed = randomElement([125, 156, 188]); // Velocidad aleatoria

  const occupiedTiles = new Set(); // Evita la superposición de vehículos

  const vehicles = Array.from({ length: 3 }, () => {
    let initialTileIndex;
    do {
      initialTileIndex = THREE.MathUtils.randInt(minTileIndex, maxTileIndex);
    } while (occupiedTiles.has(initialTileIndex));
    
    occupiedTiles.add(initialTileIndex - 1);
    occupiedTiles.add(initialTileIndex);
    occupiedTiles.add(initialTileIndex + 1);

    const color = randomElement([0xa52523, 0xbdb638, 0x78b14b]); // Color aleatorio

    return { initialTileIndex, color };
  });

  return { type: "car", direction, speed, vehicles };
}

/**
 * Genera los datos de una fila de carril con camiones.
 * @returns {Object} - Metadatos del carril con camiones.
 */
function generateTruckLaneMetadata() {
  const direction = randomElement([true, false]); // Dirección de los camiones
  const speed = randomElement([125, 156, 188]); // Velocidad aleatoria

  const occupiedTiles = new Set(); // Evita la superposición de camiones

  const vehicles = Array.from({ length: 2 }, () => {
    let initialTileIndex;
    do {
      initialTileIndex = THREE.MathUtils.randInt(minTileIndex, maxTileIndex);
    } while (occupiedTiles.has(initialTileIndex));
    
    // Ocupar más tiles para simular el tamaño del camión
    occupiedTiles.add(initialTileIndex - 2);
    occupiedTiles.add(initialTileIndex - 1);
    occupiedTiles.add(initialTileIndex);
    occupiedTiles.add(initialTileIndex + 1);
    occupiedTiles.add(initialTileIndex + 2);

    const color = randomElement([0xa52523, 0xbdb638, 0x78b14b]); // Color aleatorio

    return { initialTileIndex, color };
  });

  return { type: "truck", direction, speed, vehicles };
}
