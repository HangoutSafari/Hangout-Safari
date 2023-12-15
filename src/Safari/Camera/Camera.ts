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
    this.move(0, 0, 2);
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

  /**
   * Handles the resizing of the camera and updates the matrices accordingly
   * @param renderingContext where is the context rendered
   */
  public handleResizing(renderingContext: HTMLCanvasElement)
  {
    this.aspect = renderingContext.clientWidth/renderingContext.clientHeight;
    this.updateProjectionMatrix();
  }
}


