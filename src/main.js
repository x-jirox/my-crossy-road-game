import * as THREE from "three";
import { Renderer } from "./components/scenes/Renderer";
import { Camera } from "./components/scenes/Camera";
import { DirectionalLight } from "./components/scenes/DirectionalLight";
import { player } from "./components/objects/Player";
import { map, initializeMap } from "./components/objects/Map";
import { animateVehicles } from "./hooks/animateVehicles";
import { animatePlayer } from "./hooks/animatePlayer";
import "./collectUserInput";
import "./style.css";

const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirLight = DirectionalLight();
scene.add(dirLight);

const camera = Camera();
scene.add(camera);

initializeGame();

function initializeGame() {
  initializeMap();
}

const renderer = Renderer();
renderer.render(scene, camera);
renderer.setAnimationLoop(animate);

function animate() {
  animateVehicles();
  animatePlayer();

  renderer.render(scene, camera);
}