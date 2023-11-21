import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Debug } from "./Debuger";

const modelLoader = new THREE.LoadingManager();
/**
 * Returns the scene that has been loaded by using gltfLoader
 * @param path path to the .glb/.gltf file
 * @returns loaded scene
 */
export function loadModel(path: string): THREE.Object3D {
  const gltfLoader = new GLTFLoader(modelLoader);
  Debug.checkModelLoadingProcess(modelLoader);
  let loadedModel = new THREE.Object3D();
  gltfLoader.load(path, (loaded) => {
    loadedModel = loaded.scene;
    console.log(loadedModel);
  });

  return loadedModel;
}

/**
 * Loades every mesh of the scene
 * @param path path to the .glb/.gltf model
 * @returns loaded meshes as an array
 */
export function loadMeshes(
  path: string
): Array<THREE.Object3D<THREE.Object3DEventMap>> {
  const gltfLoader = new GLTFLoader(modelLoader);
  let loadedMeshes: Array<THREE.Object3D<THREE.Object3DEventMap>>;
  Debug.checkModelLoadingProcess(modelLoader);
  gltfLoader.load(path, (loaded) => {
    loaded.scene.children.forEach((childMesh) => {
      loadedMeshes.push(childMesh);
    });
  });

  return loadedMeshes;
}

/**
 * Loads the model and puts it to the scene
 * @param path path to the .glb/.gltf file
 * @param scene scene where to add the model
 */
export function loadAndPutToScene(path: string, scene: THREE.Scene): void {
  scene.add(loadModel(path));
}
