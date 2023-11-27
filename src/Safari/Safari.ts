import * as THREE from "three";
import { AmbientLight } from "./Light/AmbientLight";
import { DirectionLight } from "./Light/DirectionLight";
import { Renderer } from "./Renderer/Renderer";
import { Camera } from "./Camera/Camera";
import { Controls } from "./Camera/MapControls";
import { Orbit } from "./Camera/OrbitalControls";
import { loadModel } from "./ModelLoader/ModelLoader";
import { bind, handle_promise } from "svelte/internal";
import { ShapeGenerator } from "./Geometry/ShapeGenerator";
import { Scene } from "./Scene/Scene";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MapControls } from "three/examples/jsm/controls/MapControls";

export class Safari {
  public scene: Scene;
  public lightSources: Array<THREE.Light> = [];
  public renderer: Renderer;
  public camera: Camera;
  public controls: Controls;
  public safariModel: string;
  public ground: THREE.PlaneGeometry;

  public renderingContext: HTMLCanvasElement;

  constructor(renderingContext: HTMLCanvasElement, safariModel: string) {
    this.scene = new Scene();
    this.camera = new Camera(renderingContext, 65, 0.1, 2000);
    this.lightSources.push(new AmbientLight(THREE.Color.NAMES.whitesmoke, 0.6, true, new THREE.Vector3(1, 20, 10)));
    this.lightSources.push(new DirectionLight(THREE.Color.NAMES.orange,8,true,new THREE.Vector3(0, 20, 10)));
    this.renderer = new Renderer(renderingContext);
    this.controls = new Controls(this.camera, renderingContext);
    this.safariModel = safariModel;
    this.renderingContext = this.renderer.domElement;
    this.animate = this.animate.bind(this);
    this.processRezieEvent = this.processRezieEvent.bind(this);
  }

  /**
   * Sets up all necesary components for drawing calls E.G: pushes objects to the scene
   */
  public setup() {
    window.addEventListener('resize',this.processRezieEvent);

    this.lightSources.forEach((lightSource) => {
      console.log("aded light source");
      this.scene.add(lightSource);
    });
    loadModel("models/savana2.glb")
    .then((model)=>{
      this.scene.add(model);
    })
    this.scene.add(ShapeGenerator.generateBox(3, 3, 3, THREE.Color.NAMES.aqua));
  }

  /**
   * Update elements on begining of each drawing call
   */
  public update() {
    this.controls.update(0.01);
  }

  /**
   * Process on rezies event and updates the dimensions of canvas
   */
  public processRezieEvent(){
    console.log('resizing...');
    this.renderer.handleResizing();
    this.camera.handleResizing(this.renderer.domElement);
  }

  /**
   * Renderers the scene by requesting the animation frame
   */
  public animate() {
    if(this.canRender())
    {
      console.log("rendering...");
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
      this.update();
    }
  }

  //TODO: create instance of the class and call the start method to start the animation and render loop
  public start() {
    this.setup();
    console.log(this.scene);
    this.animate();
  }

  private canRender(): boolean{
    return (window.location.pathname === "/safari");
  }
}
