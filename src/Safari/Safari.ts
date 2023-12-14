import * as THREE from "three";
import { loadModel } from "./ModelLoader/ModelLoader";
import { ShapeGenerator } from "./Geometry/ShapeGenerator";
import { Scene } from "./Scene/Scene";
import { FloorGenerator } from "./Geometry/FloorGenerator";

export class Safari {
  public scene: Scene;
  public safariModel: string;
  public ground: FloorGenerator;

  constructor(renderingContext: HTMLCanvasElement, safariModel: string) {
    this.scene = new Scene(renderingContext);    
    this.safariModel = safariModel;
    this.animate = this.animate.bind(this);
    this.processRezieEvent = this.processRezieEvent.bind(this);
    this.ground = new FloorGenerator();
  }

  /**
   * Sets up all necesary components for drawing calls E.G: pushes objects to the scene
   */
  public setup() {
    window.addEventListener('resize',this.processRezieEvent);
    this.scene.setup();
    this.ground.appednInScene(this.scene);
    // loadModel("models/savana2.glb")
    // .then((model)=>{
    //   this.scene.add(model);
    // })
    //----------------------------------------------------
    // RENDER SPHERE WHERE IS LIGHT SUPPOSED TO BE (debug)
    //----------------------------------------------------
    this.scene.add(ShapeGenerator.generateSphere(
      this.scene.lightSources[1].position,
      this.scene.lightSources[1].color
      ));

      this.scene.add(ShapeGenerator.generateBox(30,30,39, THREE.Color.NAMES.crimson))
  }


  /**
   * Update elements on begining of each drawing call
   */
  public update() {
    this.scene.update();
  }

  /**
   * Process on rezies event and updates the dimensions of canvas
   */
  public processRezieEvent(){
    console.log('resizing...');
    this.scene.processResizing();
  }

  /**
   * Renderers the scene by requesting the animation frame
   */
  public animate() {
    if(this.canRender())
    {
      // console.log("rendering...");
      requestAnimationFrame(this.animate);
      this.scene.renderer.render(this.scene, this.scene.camera);
      this.update();
    }
  }

  public start() {
    this.setup();
    console.log(this.scene);
    this.animate();
  }

  private canRender(): boolean{
    return (window.location.pathname === "/safari");
  }
}
