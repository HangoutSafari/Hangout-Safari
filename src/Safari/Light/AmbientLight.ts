import * as THREE from "three";
import { LightProperties } from "./LightProperties";
/**
 * Class that depics the ambient light proerties
 */
export class AmbientLight {
    public ambientLight: THREE.AmbientLight;
    public lightProperties: LightProperties;
    
    constructor(lColor: THREE.Color, lStrenght: number, isCastingShadows:boolean ) {
      this.ambientLight = new THREE.AmbientLight;
      this.lightProperties = new LightProperties(this.ambientLight, lColor, lStrenght, isCastingShadows);
    }
  } 
