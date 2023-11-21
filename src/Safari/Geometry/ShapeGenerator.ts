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
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: gColor });
    const cube = new THREE.Mesh(geometry, material);
    return cube;
  }
}
