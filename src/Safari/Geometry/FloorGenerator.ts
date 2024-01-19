import * as THREE from "three";
import { ShapeGenerator } from "./ShapeGenerator";
import type { Scene } from "../Scene/Scene";
import { SafariVector } from "../Math/SafariVector";
import { Chunk } from "../Chunk/Chunk";
import { AnimalsGenerator } from "../Animals/AnimalsGenerator";
import type { AnimalEventDispatcher } from "../Animals/AnimalEventDispatcher";

export class FloorGenerator {
  public chunks: THREE.Group;
  private x: THREE.Vector3;
  private z: THREE.Vector3;
  private dimensions: number;
  private chunksPositions: Array<THREE.Vector3>;
  private renderedChunks: number;

  public constructor() {
    this.dimensions = 500;
    this.chunks = new THREE.Group();
    this.x = new THREE.Vector3(this.dimensions, 0, 0);
    this.z = new THREE.Vector3(0, 0, this.dimensions);
    this.renderedChunks = 0;
    this.chunksPositions = this.precalculateThePositions();
    this.isCenter = this.isCenter;
    this.chunks.add(new Chunk(this.renderedChunks, new THREE.Vector3(0, 0, 0)));
    this.renderedChunks;
    this.addChunk = this.addChunk;
  }

  /**
   * Adds chunk to the ground
   */
  public addChunk(): Chunk {
    if (this.renderedChunks <= 9) {
      const index = this.renderedChunks + 1;
      console.log("adding chunks");
      const newChunk = new Chunk(
        index,
        this.chunksPositions[this.renderedChunks]
      );
      newChunk.castShadow = true;
      newChunk.receiveShadow = true;
      this.chunks.add(newChunk);
      this.renderedChunks++;
      return newChunk;
    } else {
      alert("maximum size of the safari reached");
      return null;
    }
  }

  /**
   * Appends floor in the scene
   * @param scene scene where to append group of planes
   */
  public appednInScene(scene: Scene) {
    scene.add(this.chunks);
  }

  /**
   * Calculates position of planes
   * |-----------------------|
   * |  x-z  |   x   |  z+x  |
   * |-----------------------|
   * |  -z   | 0,0,0 |   z   |
   * |-----------------------|
   * | -x-z  |  -X   | -x+z  |
   * |-----------------------|
   * @returns Calculated positions
   */
  private precalculateThePositions(): Array<THREE.Vector3> {
    const center = new THREE.Vector3(0, 0, 0);
    const operationMatrix: Array<THREE.Vector3> = [
      new SafariVector(this.x.clone().sub(this.z)),
      new SafariVector(this.x.clone()),
      new SafariVector(this.z.clone().add(this.x)),
      //------------------------------------------------------------------------------------------------------------------------------------
      new SafariVector(this.z.clone().negate()),
      new SafariVector(this.z.clone()),
      //------------------------------------------------------------------------------------------------------------------------------------
      new SafariVector(this.z.clone().sub(this.x)),
      new SafariVector(this.x.clone().negate()),
      new SafariVector(this.x.clone().negate().add(this.z.clone().negate())),
    ];
    return operationMatrix;
  }

  /**
   * Checks if currently rendered chunk is in the center of the floor
   * @returns true if yes otherwise false
   */
  private isCenter(): boolean {
    return this.renderedChunks == 4;
  }
}
