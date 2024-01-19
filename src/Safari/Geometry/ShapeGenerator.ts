import * as THREE from "three";
import { degToRad } from "three/src/math/MathUtils";

export class ShapeGenerator {
  public static generatePlane(
    width: number,
    height: number,
    gPosition: THREE.Vector3 = new THREE.Vector3(0, 0, 0),
    gColor: number = THREE.Color.NAMES.gray
  ): THREE.Mesh {
    const geometry = new THREE.PlaneGeometry(width, height);
    const mat = new THREE.MeshPhysicalMaterial({
      color: gColor,
      side: THREE.DoubleSide,
      metalness: 0.9,
      roughness: 0.5,
    });
    const plane = new THREE.Mesh(geometry, mat);
    const translationMatrix = new THREE.Matrix4();
    translationMatrix.makeTranslation(gPosition);
    plane.rotateX(degToRad(90));
    plane.applyMatrix4(translationMatrix);

    return plane;
  }

  public static generateBox(
    width: number,
    height: number,
    depth: number,
    gColor: number = THREE.Color.NAMES.gray
  ): THREE.Mesh {
    const geometry = new THREE.BoxGeometry(width, height, depth);

    const mat = new THREE.MeshPhysicalMaterial({
      color: gColor,
      metalness: 0.7,
      roughness: 0.1,
    });
    const cube = new THREE.Mesh(geometry, mat);
    cube.castShadow = true;
    return cube;
  }

  public static generateSphere(
    position: THREE.Vector3,
    gColor: THREE.Color
  ): THREE.Mesh {
    const texture = new THREE.TextureLoader().load("/textures/light.jpeg");
    texture.offset.x = -0.1;
    texture.offset.y = 0.2;
    const geometry = new THREE.SphereGeometry(4);
    const mat = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, mat);
    sphere.translateX(position.x);
    sphere.translateY(position.y);
    sphere.translateZ(position.z);

    sphere.scale.addScalar(1);
    return sphere;
  }
}
