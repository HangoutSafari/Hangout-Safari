import * as THREE from "three";

export class ShapeGenerator {
  public static generatePlane(
    width: number,
    height: number,
    gColor: number = THREE.Color.NAMES.gray
  ): THREE.Mesh {
    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.MeshPhongMaterial({
      color: gColor,
      side: THREE.DoubleSide,
    });
    const plane = new THREE.Mesh(geometry, material);
    return plane;
  }

  public static generateBox(
    width: number,
    height: number,
    depth: number,
    gColor: number = THREE.Color.NAMES.gray
  ): THREE.Mesh {
    const geometry = new THREE.SphereGeometry(1);
    const material = new THREE.MeshPhysicalMaterial({ color: gColor, metalness:0.7, roughness:0.1,});
    const cube = new THREE.Mesh(geometry, material);
    return cube;
  }
}
