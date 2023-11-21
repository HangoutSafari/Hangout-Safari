import * as THREE from "three";
import { AmbientLight } from "./Light/AmbientLight";
import { DirectionLight } from "./Light/DirectionLight";
import { Renderer } from "./Renderer/Renderer";
import { Camera } from "./Camera/Camera";
import { Controls } from "./Camera/MapControls";
import { loadAndPutToScene } from "./ModelLoader/ModelLoader";
import { bind } from "svelte/internal";
import { ShapeGenerator } from "./Geometry/ShapeGenerator";
import { Scene } from "./Scene/Scene";

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
    this.renderingContext = renderingContext;
    this.scene = new Scene();
    this.camera = new Camera(renderingContext, 65, 0.1, 100);
    this.lightSources.push(
      new AmbientLight(THREE.Color.NAMES.whitesmoke, 0.3, true)
    );
    this.lightSources.push(
      new DirectionLight(
        THREE.Color.NAMES.white,
        1,
        true,
        new THREE.Vector3(1, 5, 0)
      )
    );
    this.renderer = new Renderer(renderingContext);
    this.controls = new Controls(this.camera, renderingContext);
    this.safariModel = safariModel;
    this.animate = this.animate.bind(this);
  }

  /**
   * Sets up all necesary components for drawing calls E.G: pushes objects to the scene
   */
  public setup() {
    this.lightSources.forEach((lightSource) => {
      console.log("aded light source");
      this.scene.add(lightSource);
    });
    //loadAndPutToScene(this.safariModel, this.scene);
    this.scene.add(ShapeGenerator.generateBox(3, 3, 3, THREE.Color.NAMES.aqua));
  }

  /**
   * Update elements on begining of each drawing call
   */
  public update() {
    this.controls.update(0.01);
  }

  /**
   * Renderers the scene by requesting the animation frame
   */
  public animate() {
    console.log("rendering...");
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
    this.update();
  }

  //TODO: create instance of the class and call the start method to start the animation and render loop
  public start() {
    this.setup();
    console.log(this.scene);
    this.animate();
  }
}
