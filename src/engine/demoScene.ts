import * as THREE from "three";
import { browser } from "$app/environment";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MapControls } from "three/examples/jsm/controls/MapControls.js";
import { construct_svelte_component } from "svelte/internal";

export default class DemoScene {
  public start(): void {
    const lightColor = 0xfdb813;
    const gltfLoader = new GLTFLoader();

    if (browser) {
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        65,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 0;
      camera.position.y = 60;

      const renderer = new THREE.WebGLRenderer({antialias: true});
  
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      const controls = new MapControls(camera, renderer.domElement);
      controls.enableRotate = true;

      controls.target.set(40.0, 3.0, 40.0);
      controls.update(0.1);
      controls.maxDistance =240;
      controls.maxPolarAngle = 1.2

      controls.enablePan = true;

      const ambient = new THREE.AmbientLight(lightColor, 1.0);
      ambient.castShadow = true;

      const directionLight = new THREE.DirectionalLight(lightColor, 10);
      directionLight.position.set(100, 100, 0);

      const geometry: THREE.BoxGeometry = new THREE.BoxGeometry(2, 2, 2);
      const material = new THREE.MeshBasicMaterial({ wireframe: true });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(
        directionLight.position.x,
        directionLight.position.y,
        directionLight.position.z
      );
      
      scene.add(directionLight);
      scene.add(ambient);
      scene.add(cube);

      gltfLoader.load("models/savana2.glb", (gltf) => {
        scene.children.forEach((child) => {
          child.receiveShadow = true;
          child.castShadow = true;
        });

        scene.add(gltf.scene);
        console.log(gltf);
      });

      gltfLoader.load("models/BIG-JUNGUS.glb", (bunny) => {
        bunny.scene.scale.set(
          scene.scale.x + 10,
          scene.scale.y + 10,
          scene.scale.z + 10
        );
        scene.position.setY(1000);
        scene.add(bunny.scene);
      });

      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        controls.update(0.01);
      }
      animate();
    }
  }
}
