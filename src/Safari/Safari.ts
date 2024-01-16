import * as THREE from "three";
import { ShapeGenerator } from "./Geometry/ShapeGenerator";
import { Scene } from "./Scene/Scene";
import { AnimalsGenerator } from "./Animals/AnimalsGenerator";
import type { AnimalEventDispatcher } from "./Animals/AnimalEventDispatcher";
import { SafariGenerator } from "./SafariGenerator";


export class Safari {
  public scene: Scene;
  public safariModel: string;
  public animals: AnimalsGenerator;
  private mousePos: THREE.Vector2;
  public safariGenerator: SafariGenerator
  public isLSDUpdateON: boolean;
  constructor(renderingContext: HTMLCanvasElement, safariModel: string, animalEventDispatcher: AnimalEventDispatcher) {
    this.scene = new Scene(renderingContext);    
    this.safariModel = safariModel;
    this.animals = new AnimalsGenerator(animalEventDispatcher);
    this.mousePos = new THREE.Vector2(0,0);
    this.safariGenerator = new SafariGenerator(animalEventDispatcher);
    this.isLSDUpdateON = false;
    this.animate = this.animate.bind(this);
    this.processRezieEvent = this.processRezieEvent.bind(this);
    this.processMouseMoveEvent = this.processMouseMoveEvent.bind(this);
    this.scene.renderer.domElement.addEventListener('mousemove', this.processMouseMoveEvent);
  }

  /**
   * Sets up all necesary components for drawing calls E.G: pushes objects to the scene
   */
  public setup() {
    window.addEventListener('resize',this.processRezieEvent);

    //--------------------------------------------
    // RENDER SPHERE WHERE IS LIGHT SUPPOSED TO BE
    //--------------------------------------------
    //!!!!!!!!!!!!!!DEBUG FEATURE!!!!!!!!!!!!!!!!!!!!!
    this.scene.add(ShapeGenerator.generateSphere(
      this.scene.lightSources[1].position,
      this.scene.lightSources[1].color
      ));
      
      this.safariGenerator.appendInScene(this.scene);

      this.scene.setup();
    }
    
  /**
   * Update elements on begining of each drawing call
   */
  public update() {
    this.safariGenerator.processMouseMovement(this.mousePos, this.scene.camera);
    this.safariGenerator.update(this.isLSDUpdateON);
    this.scene.update();
  }

  /**
   * Process on rezies event and updates the dimensions of canvas
   */
  public processRezieEvent(){
    this.scene.processResizing();
  }

  /**
   * Process on mouse move event and updates the cursor position
   */
  public processMouseMoveEvent( event ) {
    //calculate the pointer position in the SCREE-SPAVE in NDC (Normalized device coordinates)
    this.mousePos.x = ( (event.clientX - this.scene.renderer.domElement.offsetLeft) / this.scene.renderer.domElement.clientWidth ) * 2 - 1;
    this.mousePos.y = ( (event.clientY - this.scene.renderer.domElement.offsetTop) / this.scene.renderer.domElement.clientHeight ) * -2 + 1;
  }

  /**
   * Renderers the scene by requesting the animation frame
   */
  public animate() {
    if(this.canRender())
    {
      requestAnimationFrame(this.animate);
      this.scene.render();
      this.update();
    }
  }

  public start() {
    this.setup();
    this.animate();
  }

  private canRender(): boolean{
    return (window.location.pathname === "/safari");
  }
}
