import * as THREE from "three";
import { AmbientLight } from "../Light/AmbientLight";
import { DirectionLight } from "../Light/DirectionLight";

export class Renderer extends THREE.WebGLRenderer {
  public RenderingContext: HTMLElement;
  public dimensionHelper: HTMLElement;
  constructor(renderingContext: HTMLCanvasElement) {
    super({ antialias: true, canvas: renderingContext });
    this.shadowMap.enabled = true;
    this.shadowMap.type = THREE.PCFSoftShadowMap;
    this.setSize(
      renderingContext.clientWidth,
      renderingContext.clientHeight,
      true
    );
    this.domElement = renderingContext;
    this.setPixelRatio(window.devicePixelRatio);
  }

  /**
   * Handles the responsivness of the canvas and resets the renderer
   */
  public handleResizing()
  {
    this.dimensionHelper = document.getElementById('dimentionHelper');
    this.setSize(this.dimensionHelper.clientWidth, this.dimensionHelper.clientHeight, true);
    this.pixelRatio = window.devicePixelRatio;
  }
}
