import * as THREE from "three";
import { MapControls } from "three/examples/jsm/controls/MapControls";
import type { Camera } from "./Camera";
import type { OrthoCamera } from "./OrthoCamera";

export class Controls extends MapControls {
  constructor(camera: Camera, renderingContext: HTMLCanvasElement) {
    super(camera, renderingContext);
    this.enablePan = true;
    this.enableRotate = true;
    this.target.set(0.0, 20.0, 30.0);
    this.update(0.1);
    this.maxDistance = 2240;
    this.maxPolarAngle = Math.PI / 3.2;
    this.minPolarAngle = Math.PI / 3.2;
  }
}
