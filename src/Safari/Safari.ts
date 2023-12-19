import * as THREE from "three";
import { loadModel } from "./ModelLoader/ModelLoader";
import { ShapeGenerator } from "./Geometry/ShapeGenerator";
import { Scene } from "./Scene/Scene";
import { FloorGenerator } from "./Geometry/FloorGenerator";
import { AnimalsGenerator } from "./Animals/AnimalsGenerator";
import { Animal } from "./Animals/Animal";


export class Safari {
  public scene: Scene;
  public safariModel: string;
  public ground: FloorGenerator;
  public animals: AnimalsGenerator;
  private mousePos: THREE.Vector2;

  constructor(renderingContext: HTMLCanvasElement, safariModel: string) {
    this.scene = new Scene(renderingContext);    
    this.safariModel = safariModel;
    this.animate = this.animate.bind(this);
    this.animals = new AnimalsGenerator();
    
    this.processRezieEvent = this.processRezieEvent.bind(this);
    this.processMouseMoveEvent = this.processMouseMoveEvent.bind(this);
    this.ground = new FloorGenerator();
    this.mousePos = new THREE.Vector2(0,0);

    this.scene.renderer.domElement.addEventListener('mousemove', this.processMouseMoveEvent);
  }

  /**
   * Sets up all necesary components for drawing calls E.G: pushes objects to the scene
   */
  public setup() {
    window.addEventListener('resize',this.processRezieEvent);
    this.scene.setup();
    this.ground.appednInScene(this.scene);
    this.animals.addAnimal(new Animal(new THREE.Vector3(0,800,0))); 
    this.animals.appednInScene(this.scene);
    
    //--------------------------------------------
    // RENDER SPHERE WHERE IS LIGHT SUPPOSED TO BE
    //--------------------------------------------
    //!!!!!!!!!!!!!!DEBUG FEATURE!!!!!!!!!!!!!!!!!!!!!
    this.scene.add(ShapeGenerator.generateSphere(
      this.scene.lightSources[1].position,
      this.scene.lightSources[1].color
      ));

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
   * Process on mouse move event and updates the cursor position
   */
  public processMouseMoveEvent( event ) {

    this.mousePos.x = event.clientX ;
    this.mousePos.y =  event.clientY;
    // C syntax lol
  //   console.log(event);
  //   console.log('mouse X %d', this.mousePos.x);
  //   console.log('mouse Y %d', this.mousePos.y);
 }

  /**
   * Renderers the scene by requesting the animation frame
   */
  public animate() {
    if(this.canRender())
    {
      // console.log("rendering...");
      requestAnimationFrame(this.animate);
      this.animals.checkForMouseHover(this.mousePos);
      this.scene.render()
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
