import * as THREE from "three";
import { degToRad } from "three/src/math/MathUtils";

export class ShapeGenerator {
  public static generatePlane(
    width: number,
    height: number,
    gColor: number = THREE.Color.NAMES.gray
  ): THREE.Mesh {
    const geometry = new THREE.PlaneGeometry(width, height);
    const mat = new THREE.MeshPhysicalMaterial({
      color: gColor,
      side: THREE.DoubleSide,
      metalness: 0.9,
      roughness: 0.5
    });
    const plane = new THREE.Mesh(geometry, mat);
    plane.rotateX(degToRad(90));
    
    return plane;
  }

  public static generateBox(
    width: number,
    height: number,
    depth: number,
    gColor: number = THREE.Color.NAMES.gray
  ): THREE.Mesh {
    const geometry = new THREE.BoxGeometry(width,height,depth);
    const mat = new THREE.MeshPhysicalMaterial({ color: gColor, metalness:0.7, roughness:0.1,});
    const cube = new THREE.Mesh(geometry, mat);
    return cube;
  }


  public static generateSphere(
    position: THREE.Vector3,
    gColor: THREE.Color 
  ): THREE.Mesh {
    const geometry = new THREE.SphereGeometry(4);
    const mat = new THREE.MeshBasicMaterial({color: gColor});
    const sphere = new THREE.Mesh(geometry, mat);
    sphere.translateX(position.x);
    sphere.translateY(position.y);
    sphere.translateZ(position.z);
    return sphere;
  }
}
