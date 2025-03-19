import * as THREE from "three";
import { Renderer } from "./components/scenes/Renderer";
import { Camera } from "./components/scenes/Camera";
import { DirectionalLight } from "./components/scenes/DirectionalLight";
import { player, initializePlayer } from "./components/objects/Player";
import { map, initializeMap } from "./components/objects/Map";
import { animateVehicles } from "./utilities/animates/animateVehicles";
import { animatePlayer } from "./utilities/animates/animatePlayer";
import { hitTest } from "./hitTest";
import "./collectUserInput";
import "./style.css";

// Creación de la escena principal
const scene = new THREE.Scene();
scene.add(player); // Agrega el jugador a la escena
scene.add(map); // Agrega el mapa a la escena

// Configuración de luces
const ambientLight = new THREE.AmbientLight(); // Luz ambiental
scene.add(ambientLight);

const dirLight = DirectionalLight(); // Luz direccional
// Configura la luz direccional para que siga al jugador
dirLight.target = player;
player.add(dirLight);

// Configuración de la cámara
const camera = Camera();
player.add(camera); // La cámara sigue al jugador

// Elementos de la interfaz de usuario (UI)
const scoreDOM = document.getElementById("score"); // Puntaje del jugador
const resultDOM = document.getElementById("result-container"); // Contenedor de resultados

// Inicialización del juego
initializeGame();

// Agregar evento para reiniciar el juego
// Si el botón "retry" existe, al hacer clic se reinicia el juego
document
  .querySelector("#retry")
  ?.addEventListener("click", initializeGame);

// Función que inicializa los elementos del juego
function initializeGame() {
  initializePlayer(); // Inicializa el jugador
  initializeMap(); // Inicializa el mapa

  // Reinicia la UI
  if (scoreDOM) scoreDOM.innerText = "0"; // Reinicia el puntaje
  if (resultDOM) resultDOM.style.visibility = "hidden"; // Oculta el contenedor de resultados
}

// Configuración del renderizado
const renderer = Renderer();
renderer.setAnimationLoop(animate); // Establece el ciclo de animación

// Función de animación principal
function animate() {
  animateVehicles(); // Anima los vehículos
  animatePlayer(); // Anima el jugador
  hitTest(); // Verifica colisiones
  
  renderer.render(scene, camera); // Renderiza la escena
}
