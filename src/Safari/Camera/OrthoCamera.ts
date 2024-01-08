import * as THREE from "three";
import { SafariVector } from "../Math/SafariVector";

export class OrthoCamera extends THREE.OrthographicCamera {

  constructor(
    renderingContext: HTMLCanvasElement,

  ) {
    super(
      //FOV,
      renderingContext.offsetWidth / -2,
      renderingContext.offsetWidth / 2,

      renderingContext.offsetHeight /2,
      renderingContext.offsetHeight / - 2,

      0.01,
    );
    
    this.position.set(0,900,-3900);
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
    this.left = -renderingContext.clientWidth / 2;
    this.right = renderingContext.clientWidth / 2;
    this.top = renderingContext.clientHeight / 2;
    this.bottom = -renderingContext.clientHeight / 2;

    this.near = 0.1;
    this.far = 6000;
    this.updateProjectionMatrix();
  }
}
