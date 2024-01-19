import * as THREE from "three";
import { Renderer } from "../Renderer/Renderer";
import { AmbientLight } from "../Light/AmbientLight";
import { DirectionLight } from "../Light/DirectionLight";
import { Camera } from "../Camera/Camera";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OrthoCamera } from "../Camera/OrthoCamera";
import { Controls } from "../Camera/MapControls";
export class Scene extends THREE.Scene {
  public lightSources: Array<THREE.Light> = [];
  public renderer: Renderer;

  public camera: Camera;

  public controls: Controls;
  public renderingContext: HTMLCanvasElement;

  constructor(renderingContext: HTMLCanvasElement) {
    super();
    this.lightSources.push(
      new AmbientLight(
        THREE.Color.NAMES.whitesmoke,
        0.6,
        true,
        new THREE.Vector3(0, 60, 30)
      )
    );
    this.lightSources.push(
      new DirectionLight(
        THREE.Color.NAMES.lightgoldenrodyellow,
        12,
        true,
        new THREE.Vector3(-900, 900, 0)
      )
    );

    this.camera = new Camera(renderingContext, 75, 0.1, 6000.0);

    this.controls = new Controls(this.camera, renderingContext);

    this.renderer = new Renderer(renderingContext);

    this.background = new THREE.Color(THREE.Color.NAMES.gray);

    this.renderingContext = renderingContext;
  }

  public setup(): void {
    this.lightSources.forEach((lightSource) => {
      if (lightSource instanceof THREE.DirectionalLight) {
        this.add(lightSource.target);
        console.log("aded light source");
      }
      this.add(lightSource);
    });
  }

  public update(): void {
    this.camera.updateProjectionMatrix();
    this.controls.update(0.01);
  }

  public processResizing(): void {
    this.renderer.handleResizing();
    this.camera.handleResizing(this.renderer.domElement);
  }

  public render() {
    this.renderer.render(this, this.camera);
  }
}
