import * as THREE from "three";
import { AmbientLight } from "../Light/AmbientLight";
import { DirectionLight } from "../Light/DirectionLight";

export class Renderer extends THREE.WebGLRenderer {
  public RenderingContext: HTMLElement;

  constructor(renderingContext: HTMLElement) {
    super({ antialias: true });
    this.shadowMap.enabled = true;
    this.setSize(
      renderingContext.clientWidth,
      renderingContext.clientWidth,
      true
    );
  }
}
