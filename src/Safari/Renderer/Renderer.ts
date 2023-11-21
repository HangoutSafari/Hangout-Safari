import * as THREE from "three";
import { AmbientLight } from "../Light/AmbientLight";
import { DirectionLight } from "../Light/DirectionLight";

export class Renderer extends THREE.WebGLRenderer {
  public RenderingContext: HTMLElement;

  constructor(renderingContext: HTMLCanvasElement) {
    super({ antialias: true, canvas: renderingContext });
    this.shadowMap.enabled = true;
    this.setSize(
      renderingContext.clientHeight,
      renderingContext.clientWidth,
      true
    );
  }
}
