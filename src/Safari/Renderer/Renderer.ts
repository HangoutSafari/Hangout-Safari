import * as THREE from "three";
import { AmbientLight } from "../Light/AmbientLight";
import { DirectionLight } from "../Light/DirectionLight";

export class Renderer extends THREE.WebGLRenderer {
  public RenderingContext: HTMLElement;
  public dimensionHelper: HTMLElement;
  constructor(renderingContext: HTMLCanvasElement) {
    super({ antialias: true, canvas: renderingContext });
    this.shadowMap.enabled = true;
    this.setSize(
      renderingContext.clientWidth,
      renderingContext.clientHeight,
      true
    );
    this.domElement = renderingContext;
    this.setPixelRatio(window.devicePixelRatio);
  }

  public handleResizing(renderingContext: HTMLCanvasElement)
  {
    this.dimensionHelper = document.getElementById('dimentionHelper');
    this.setSize(this.dimensionHelper.clientWidth, this.dimensionHelper.clientHeight, true);
    this.pixelRatio = window.devicePixelRatio;
  }
}
