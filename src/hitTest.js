import * as THREE from "three";
import { metadata as rows } from "./components/objects/Map";
import { player, position } from "./components/objects/Player";

// Elementos de la interfaz de usuario (UI)
const resultDOM = document.getElementById("result-container"); // Contenedor de resultados
const finalScoreDOM = document.getElementById("final-score"); // Puntuación final

// Función para detectar colisiones entre el jugador y los vehículos
export function hitTest() {
  const row = rows[position.currentRow - 1]; // Obtiene la fila actual del jugador
  if (!row) return;

  // Verifica si la fila actual contiene vehículos
  if (row.type === "car" || row.type === "truck") {
    const playerBoundingBox = new THREE.Box3(); // Crea una caja de colisión para el jugador
    playerBoundingBox.setFromObject(player);

    // Recorre los vehículos en la fila y verifica colisión
    row.vehicles.forEach(({ ref }) => {
      if (!ref) throw Error("Vehicle reference is missing");

      const vehicleBoundingBox = new THREE.Box3(); // Crea una caja de colisión para el vehículo
      vehicleBoundingBox.setFromObject(ref);

      // Si el jugador colisiona con un vehículo, muestra la pantalla de resultado
      if (playerBoundingBox.intersectsBox(vehicleBoundingBox)) {
        if (!resultDOM || !finalScoreDOM) return;
        resultDOM.style.visibility = "visible"; // Muestra el contenedor de resultados
        finalScoreDOM.innerText = position.currentRow.toString(); // Muestra la puntuación final
      }
    });
  }
}
