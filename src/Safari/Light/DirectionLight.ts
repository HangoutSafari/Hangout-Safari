import * as THREE from "three";

/**
 * Class that handles direction light of the safari
 */
export class DirectionLight extends THREE.DirectionalLight {
  public pos: THREE.Vector3;
  /**
   * Creates a new instance of the DirectionLight object
   * @param lColor color of the light
   * @param lStrength instensity of the light
   * @param isCastingShadows true if light has abbility to cast shadwos
   * @param lPosition postiion of the light
   */
  constructor(
    lColor: number,
    lStrength: number,
    isCastingShadows: boolean,
    lPosition: THREE.Vector3
  ) {
    super(lColor, lStrength);
    this.castShadow = isCastingShadows;
    this.shadow.mapSize.width = 1000;
    this.shadow.mapSize.height=1000;
    this.shadow.camera.near = 0.1;
    this.shadow.camera.far = 2000;
    this.pos = lPosition;
    this.position.set(lPosition.x, lPosition.y, lPosition.z);
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
