import { queueMove } from "./components/objects/Player"; // Importa la función para mover al jugador

// Asigna eventos de clic a los botones de dirección en la interfaz de usuario
document
  .getElementById("forward")
  ?.addEventListener("click", () => queueMove("forward")); // Mover hacia adelante

document
  .getElementById("backward")
  ?.addEventListener("click", () => queueMove("backward")); // Mover hacia atrás

document
  .getElementById("left")
  ?.addEventListener("click", () => queueMove("left")); // Mover hacia la izquierda

document
  .getElementById("right")
  ?.addEventListener("click", () => queueMove("right")); // Mover hacia la derecha

// Asigna eventos de teclado para mover al jugador con las flechas del teclado
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    event.preventDefault(); // Evita el desplazamiento de la página al presionar la tecla
    queueMove("forward"); // Mueve al jugador hacia adelante
  } else if (event.key === "ArrowDown") {
    event.preventDefault(); // Evita el desplazamiento de la página
    queueMove("backward"); // Mueve al jugador hacia atrás
  } else if (event.key === "ArrowLeft") {
    event.preventDefault(); // Evita el desplazamiento de la página
    queueMove("left"); // Mueve al jugador hacia la izquierda
  } else if (event.key === "ArrowRight") {
    event.preventDefault(); // Evita el desplazamiento de la página
    queueMove("right"); // Mueve al jugador hacia la derecha
  }
});
