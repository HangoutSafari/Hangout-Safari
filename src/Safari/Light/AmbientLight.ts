import * as THREE from "three";
/**
 * Class that depics the ambient light proerties
 */
export class AmbientLight extends THREE.AmbientLight {
  constructor(lColor: number, lStrenght: number, isCastingShadows: boolean, lPosition: THREE.Vector3) {
    super(lColor, lStrenght);
    this.castShadow = false;
    this.moveToPositionV(lPosition);
  }

    /**
   * Sets the position of the light ot the position of the provided vector
   * @param lPosition where to move light
   */
    public moveToPositionV(lPosition: THREE.Vector3): void {
      this.position.set(
        this.position.x + lPosition.x,
        this.position.y + lPosition.y,
        this.position.z + lPosition.z
      );
    }
  
    /**
     * Moves to the postion specified by parameters
     * @param x move on x axis
     * @param y move on y axis
     * @param z move on z axis
     */
    public moveToPosition(x: number, y: number, z: number) {
      this.position.set(
        this.position.x + x,
        this.position.y + y,
        this.position.z + z
        
      );
    }
}
