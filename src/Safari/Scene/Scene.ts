import * as THREE from "three";
import  { Renderer } from "../Renderer/Renderer";
import type  { Controls } from "../Camera/MapControls";
import { AmbientLight } from "../Light/AmbientLight";
import { DirectionLight } from "../Light/DirectionLight";
import { Camera } from "../Camera/Camera";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OrthoCamera } from "../Camera/OrthoCamera";
import { MapControls } from "three/examples/jsm/controls/MapControls";

export class Scene extends THREE.Scene {

  public lightSources: Array<THREE.Light> = [];
  public renderer: Renderer;
  
  // public camera: Camera;
  public camera: OrthoCamera;

  public controls: Controls;
  public renderingContext: HTMLCanvasElement;


  constructor(renderingContext: HTMLCanvasElement) {
    super();
    this.lightSources.push(new AmbientLight(THREE.Color.NAMES.whitesmoke, 0.6, true, new THREE.Vector3(1, 20, 10)));
    this.lightSources.push(new DirectionLight(THREE.Color.NAMES.whitesmoke,8,true,new THREE.Vector3(0, 40, 30)));
    
    // this.camera = new Camera(renderingContext, 65, 0.1, 2000);

    this.camera = new OrthoCamera(renderingContext);

    this.renderer = new Renderer(renderingContext);

    this.controls = new MapControls(this.camera, renderingContext);

    //----------------------------------
    //ORBIT CONTROLS FOR DEBUG PUPRPOSES
    //----------------------------------
    //this.controls = new Controls(this.camera, this.renderer.domElement);
    // this.controls = new OrbitControls(this.camera, renderingContext);

    this.background = new THREE.Color(THREE.Color.NAMES.gray);
    this.renderingContext = renderingContext;
  }


  public setup(): void
  {
    this.lightSources.forEach((lightSource) => {
      console.log("aded light source");
      this.add(lightSource);
    });

  }

  public update(): void
  {
    this.controls.update(0.01);
  }

  public processResizing(): void
  {
    this.renderer.handleResizing();
    this.camera.handleResizing(this.renderer.domElement);
  }

  public render()
  {
    
  }
}
