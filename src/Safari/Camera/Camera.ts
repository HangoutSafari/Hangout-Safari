import * as THREE from "three";

export class Camera extends THREE.PerspectiveCamera {
  constructor(
    domElement: HTMLCanvasElement,
    FOV: number,
    nearPlane: number,
    farPlane: number
  ) {
    super(
      FOV,
      domElement.clientWidth / domElement.clientHeight,
      nearPlane,
      farPlane
    );
    this.move(0, 0, 10);
  }

  /**
   * Moves camera into the desired coordinates
   * @param x position on x
   * @param y position on y
   * @param z position on z
   */
  public move(x: number, y: number, z: number) {
    this.position.set(
      this.position.x + x,
      this.position.y + y,
      this.position.z + z
    );
  }
}
