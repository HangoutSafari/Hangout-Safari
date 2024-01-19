import * as THREE from "three";
import { loadModel } from "../ModelLoader/ModelLoader";

export class Vegetation extends THREE.Group {
  private numberOfInstances: number;
  private vegetationModel: THREE.Object3D;

  private geometry: THREE.BufferGeometry;
  private material: THREE.MeshBasicMaterial;

  public constructor(numberOfInstanves: number, maxDimetions: number) {
    super();
    loadModel("/models/voxel_tree.glb").then((model) => {
      for (let i = 0; i < numberOfInstanves; i++) {
        this.vegetationModel = model.scene.clone();
        const translationMatxi = new THREE.Matrix4();
        translationMatxi.makeTranslation(
          new THREE.Vector3(
            Math.random() * maxDimetions,
            0,
            Math.random() * maxDimetions
          )
        );
        this.vegetationModel.applyMatrix4(translationMatxi);
        //    console.log(this.vegetationModel.children);
        this.add(this.vegetationModel);
      }
    });
  }
}
