import type * as THREE from "three";

/**
 * Class for manipulating properties of the light
 */
export class LightProperties {
  public lightColor: THREE.Color;
  public lightStrength: number;
  public isCastingShadows: boolean;

  /**
   * Creates a new instace of the LightProperties object
   * @param light light objet we want to set properties for
   * @param lColor color of the light
   * @param lStrength intensity of the light
   * @param isCastingShadows true if light can cast shadows otherwise false
   */
  constructor(
    light: THREE.Light,
    lColor: THREE.Color,
    lStrength: number,
    isCastingShadows: boolean = true
  ) {
    //color
    this.lightColor = lColor;
    light.color = this.lightColor;

    //strength
    this.lightStrength = lStrength;
    light.intensity = this.lightStrength;

    //shadows
    this.isCastingShadows = isCastingShadows;
    light.castShadow = isCastingShadows;
  }

  /**
   * Moves light to the desired position
   * @param light light that we want to move
   * @param x set x coordinate
   * @param y set y coordinate
   * @param z set z coordinate
   */
  public moveToPosition(
    light: THREE.Light,
    x: number,
    y: number,
    z: number
  ): void {
    light.position.set(
      light.position.x + x,
      light.position.y + y,
      light.position.z + z
    );
  }
}
