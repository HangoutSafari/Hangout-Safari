import * as THREE from "three";
import { GLTFLoader, type GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Debug } from "./Debuger";

const modelLoader = new THREE.LoadingManager();
/**
 * Returns the scene that has been loaded by using gltfLoader
 * @param path path to the .glb/.gltf file
 * @param callback callback function that will have access to the loaded model
 * @returns loaded scene
 */
export function loadModel(path: string): Promise<GLTF> {
  return new Promise((resolve) => {
    const gltfLoader = new GLTFLoader(modelLoader);
    Debug.checkModelLoadingProcess(modelLoader);
    gltfLoader.load(path, (loaded) => {
      const loadedModel = loaded;
      console.log(loadedModel);
      resolve(loadedModel);
    });
  });
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


