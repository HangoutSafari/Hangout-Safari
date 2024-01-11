import * as THREE from "three";
import { loadModel } from "./ModelLoader/ModelLoader";
import { ShapeGenerator } from "./Geometry/ShapeGenerator";
import { Scene } from "./Scene/Scene";
import { FloorGenerator } from "./Geometry/FloorGenerator";
import { AnimalsGenerator } from "./Animals/AnimalsGenerator";
import { Animal } from "./Animals/Animal";
import type { AnimalEventDispatcher } from "./Animals/AnimalEventDispatcher";
import { RARITY } from "./Animals/Animal";


export class Safari {
  public scene: Scene;
  public safariModel: string;
  public ground: FloorGenerator;
  public animals: AnimalsGenerator;
  private mousePos: THREE.Vector2;
  

  constructor(renderingContext: HTMLCanvasElement, safariModel: string, animalEventDispatcher: AnimalEventDispatcher) {
    this.scene = new Scene(renderingContext);    
    this.safariModel = safariModel;
    this.animate = this.animate.bind(this);
    this.animals = new AnimalsGenerator(animalEventDispatcher);
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
    //--------------------------------------------
    // RENDER SPHERE WHERE IS LIGHT SUPPOSED TO BE
    //--------------------------------------------
    //!!!!!!!!!!!!!!DEBUG FEATURE!!!!!!!!!!!!!!!!!!!!!
    this.scene.add(ShapeGenerator.generateSphere(
      this.scene.lightSources[1].position,
      this.scene.lightSources[1].color
      ));
      
      this.animals.addAnimal(new Animal('images/modelImages/crocodile.png', '/models/Animals/crocodile.glb', new THREE.Vector3(50,43,140), "Crocodile",RARITY.rare,"Party", 0, 3.0));  
      this.animals.addAnimal(new Animal('images/modelImages/deer.png', '/models/Animals/deer.glb', new THREE.Vector3(50,43,120), "Deer",RARITY.rare,"Music", 0, 3.0));  
      this.animals.addAnimal(new Animal('images/modelImages/elephant.png', '/models/Animals/elephant.glb', new THREE.Vector3(50,43,30), "Elephant",RARITY.rare,"Karaoke", 0, 3.0));  
      this.animals.addAnimal(new Animal('images/modelImages/frog.png', '/models/Animals/frog.glb', new THREE.Vector3(50,43,10), "Frog",RARITY.rare,"Quiz", 0, 3.0));  
      this.animals.addAnimal(new Animal('images/modelImages/hippo.png', '/models/Animals/hippo.glb', new THREE.Vector3(50,43,-20), "Hippo",RARITY.rare,"Stand-up", 0, 3.0));  
      this.animals.addAnimal(new Animal('images/modelImages/elephant.png', '/models/Animals/lion.glb', new THREE.Vector3(50,43,-60), "Lion",RARITY.rare,"Koncert", 0, 3.0));  
      this.animals.addAnimal(new Animal('images/modelImages/elephant.png', '/models/Animals/monkey.glb', new THREE.Vector3(-90,43,-60), "Monkey",RARITY.rare,"Blind date", 0, 3.0));  
      this.animals.addAnimal(new Animal('images/modelImages/elephant.png', '/models/Animals/ostrich.glb', new THREE.Vector3(-90,43,-30), "Ostrich",RARITY.rare,"IT conference", 0, 3.0));
      this.animals.addAnimal(new Animal('images/modelImages/elephant.png', '/models/Animals/rabbit.glb', new THREE.Vector3(-90,43,0), "Rabbit",RARITY.rare,"IT conference", 0, 3.0));  
      this.animals.addAnimal(new Animal('images/modelImages/elephant.png', '/models/Animals/giraffe.glb', new THREE.Vector3(50,50,160),"Girrafe", RARITY.rare, "Art fair",0, 4.2));  
      this.animals.appednInScene(this.scene);
      
      this.scene.setup();
      this.ground.appednInScene(this.scene);
      
      
    }
    
    
  /**
   * Update elements on begining of each drawing call
   */
  public update() {
    this.animals.checkForMouseHover(this.mousePos, this.scene.camera, this.scene);
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
    console.log(this.scene);
    this.animate();
  }

  private canRender(): boolean{
    return (window.location.pathname === "/safari");
  }
}
