import * as THREE from "three";
/**
 * Class that depics the ambient light proerties
 */
export class AmbientLight extends THREE.AmbientLight {
  constructor(lColor: number, lStrenght: number, isCastingShadows: boolean) {
    super(lColor, lStrenght);
    this.castShadow = isCastingShadows;
  }
}
