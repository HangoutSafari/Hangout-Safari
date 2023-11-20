import * as THREE from "three";
import { browser } from "$app/environment";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MapControls } from "three/examples/jsm/controls/MapControls.js";
import { construct_svelte_component } from "svelte/internal";

export default class DirectionLight {
  DirectionLight: THREE.DirectionalLight;
  Position: THREE.Vector3;
  LightProperties: LightProperties;
  constructor() {}
}
