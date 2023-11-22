import * as THREE from 'three'
import  { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import type { Camera } from './Camera';

export class Orbit extends OrbitControls{
    constructor(camera: Camera, renderingContext: HTMLCanvasElement){
        super(camera, renderingContext); 
    }
}