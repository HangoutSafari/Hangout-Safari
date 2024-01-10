<script>
    import { onMount } from "svelte";
    import * as THREE from "three";
    import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader";
  
    let popupVisible = false;
    let scene;
    let camera;
    let renderer;
  
    onMount(() => {
      // Initialize Three.js components
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer();
  
      camera.position.z = 5;
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
  
      // Load 3D model
      const loader = new GLTFLoader();
      loader.load("path/to/your/animal/model.gltf", (gltf: GLTF) => {
        const animal = gltf.scene;
        scene.add(animal);
      });
  
      // Render loop
      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }
  
      animate();
    });
  
    function togglePopup() {
      popupVisible = !popupVisible;
    }
  </script>
  
  <div class="text-center mt-8">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={togglePopup}>
      Toggle Popup
    </button>
  
    {#if popupVisible}
      <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 p-6 bg-white">
        <canvas id="animalCanvas"></canvas>
      </div>
    {/if}
  </div>
  
  <style>
    canvas {
      width: 100%;
      height: 100%;
    }
  </style>
  