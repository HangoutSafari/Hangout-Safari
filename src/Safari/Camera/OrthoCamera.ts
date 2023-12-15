import * as THREE from "three";

export class OrthoCamera extends THREE.OrthographicCamera {

  constructor(
    renderingContext: HTMLCanvasElement,

  ) {
    super(
    //   FOV,
      renderingContext.clientWidth / - 2,
      renderingContext.clientWidth / 2,

      renderingContext.clientHeight / 2,
      renderingContext.clientHeight / - 2,

      -2000,
      2000

    );
    this.move(2, 2, 2);
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
    this.left = renderingContext.clientWidth / - 2;
    this.right = renderingContext.clientWidth / 2;
    this.top = renderingContext.clientHeight / 2;
    this.bottom = renderingContext.clientHeight / - 2;

    this.near = - 2000;
    this.far = 2000;
    this.updateProjectionMatrix();
  }
}
