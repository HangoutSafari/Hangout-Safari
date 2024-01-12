import * as THREE from "three";
import { SafariVector } from "../Math/SafariVector";
import { degToRad } from "three/src/math/MathUtils";

export class OrthoCamera extends THREE.OrthographicCamera {

  constructor( renderingContext: HTMLCanvasElement ) {  
    const aspect =  renderingContext.offsetWidth / renderingContext.offsetHeight;
    const frustumSize = 1000;
    super( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 0.1, 9000 );
    this.position.set(400,0,-400);
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
    const aspect =  renderingContext.clientWidth / renderingContext.clientHeight;
    const frustumSize = 3190;
    this.left =  frustumSize * aspect / - 2;
    this.right=  frustumSize * aspect / 2;
    this.top =  frustumSize / 2;
    this.bottom = frustumSize / - 2; 
    this.near = 0.1;
    this.far =  9000;
    this.updateProjectionMatrix();
  }
}
