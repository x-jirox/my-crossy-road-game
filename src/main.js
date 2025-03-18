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

const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirLight = DirectionalLight();
dirLight.target = player;
player.add(dirLight);

const camera = Camera();
player.add(camera);

const scoreDOM = document.getElementById("score");
const resultDOM = document.getElementById("result-container");

initializeGame();

document
  .querySelector("#retry")
  ?.addEventListener("click", initializeGame);

function initializeGame() {
  initializePlayer();
  initializeMap();

  // Initialize UI
  if (scoreDOM) scoreDOM.innerText = "0";
  if (resultDOM) resultDOM.style.visibility = "hidden";
}

const renderer = Renderer();
renderer.setAnimationLoop(animate);

function animate() {
  animateVehicles();
  animatePlayer();
  hitTest();

  renderer.render(scene, camera);
}

