import * as THREE from "three";
import { MapControls } from "three/examples/jsm/controls/MapControls";
import type { Camera } from "./Camera";

export class Controls extends MapControls {
  constructor(camera: Camera, renderingContext: HTMLCanvasElement) {
    super(camera, renderingContext);
    this.enableRotate = true;
    // this.target.set(0.0, 0.0, 0.0);
    // this.update(0.1);
    this.maxDistance = 240;
    this.enablePan = true;
  }
}
