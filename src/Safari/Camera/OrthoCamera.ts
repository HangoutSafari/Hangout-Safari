import * as THREE from "three";

export class OrthoCamera extends THREE.OrthographicCamera {

  constructor(
    domElement: HTMLCanvasElement,
  ) {
    super(
      domElement.clientWidth / - 2,
      domElement.clientWidth / 2,
      domElement.clientHeight / 2,
      domElement.clientHeight / - 2,

      0,
      1000
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
    this.updateProjectionMatrix();
  }
}
