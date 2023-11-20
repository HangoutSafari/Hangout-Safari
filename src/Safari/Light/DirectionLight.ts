import * as THREE from "three";
import { LightProperties } from "./LightProperties";

/**
 * Class that handles direction light of the safari
 */
export class DirectionLight {
    public directionLight: THREE.DirectionalLight;
    public position: THREE.Vector3;
    public lightProperties: LightProperties;
  
    /**
     * Creates a new instance of the DirectionLight object
     * @param lColor color of the light 
     * @param lStrength instensity of the light 
     * @param isCastingShadows true if light has abbility to cast shadwos
     * @param lPosition postiion of the light
     */
    constructor(lColor: THREE.Color, lStrength: number, isCastingShadows: boolean, lPosition: THREE.Vector3){
      this.directionLight = new THREE.DirectionalLight();
      this.lightProperties = new LightProperties(this.directionLight, lColor, lStrength, isCastingShadows);  
      this.position = lPosition;
      this.lightProperties.moveToPosition(this.directionLight, lPosition.x, lPosition.y, lPosition.z);
    }
  }
