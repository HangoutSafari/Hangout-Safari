import * as THREE from "three";

export class SafariVector extends THREE.Vector3 {
  public constructor(vector: THREE.Vector3) {
    super(vector.x, vector.y, vector.z);
  }
}
