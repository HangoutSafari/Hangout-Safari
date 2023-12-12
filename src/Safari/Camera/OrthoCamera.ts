import * as THREE from 'three'

export class OrthoCamera extends THREE.OrthographicCamera {

    constructor(
      renderingContext: HTMLCanvasElement,
    ) {
        const aspectRatio = renderingContext.clientWidth / renderingContext.clientHeight; 
      super(
        aspectRatio *renderingContext.width / -2,
        aspectRatio *renderingContext.width / 2,
        aspectRatio *renderingContext.height / 2,
        aspectRatio *renderingContext.height / -2,      
        );
      this.move(0, 0, 30);
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
        const aspectRatio = renderingContext.clientWidth / renderingContext.clientHeight;

        this.left = aspectRatio * renderingContext.clientWidth / -2;
        this.right = aspectRatio * renderingContext.clientWidth / 2;
        this.top =aspectRatio * renderingContext.clientHeight / 2;
        this.bottom = aspectRatio * renderingContext.clientWidth / -2;
    
        this.updateProjectionMatrix();
    }
  }