import * as THREE from "three";
import { AmbientLight } from "./Light/AmbientLight";
import { DirectionLight } from "./Light/DirectionLight";
import { Renderer } from "./Renderer/Renderer";
import { Camera } from "./Camera/Camera";
import { Controls } from "./Camera/MapControls";

export class safari {
  public scene: THREE.Scene;
  public lightSources: Array<THREE.Light>;
  public renderer: Renderer;
  public camera: Camera;
  public controls: Controls;
  public safariModel: THREE.Object3D;

  constructor(renderingContext: HTMLElement) {
    this.scene = new THREE.Scene();
    this.camera = new Camera(renderingContext, 65, 0.1, 100);
    this.lightSources.push(
      new AmbientLight(THREE.Color.NAMES.whitesmoke, 0.3, true)
    );
    this.lightSources.push(
      new DirectionLight(
        THREE.Color.NAMES.darkorange,
        20,
        true,
        new THREE.Vector3(0, 60, 0)
      )
    );
    this.renderer = new Renderer(renderingContext);
    this.controls = new Controls(this.camera, renderingContext);
  }

  public update() {}
}
