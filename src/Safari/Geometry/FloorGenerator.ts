import  * as THREE from 'three'
import { ShapeGenerator } from './ShapeGenerator';
import type { Scene } from '../Scene/Scene';
import { SafariVector } from '../Math/SafariVector';

export class FloorGenerator
{
    public planes: THREE.Group;
    
    private x: THREE.Vector3;
    private z: THREE.Vector3;
    private width: number;
    private height: number;
    private planePositions: Array<THREE.Vector3>
    private renderedChunks: number;

    public constructor()
    {
        this.width = 440;
        this.height = this.width;
        this.planes = new THREE.Group();
        this.planes.add(ShapeGenerator.generatePlane(this.width, this.height, new THREE.Vector3(0,0,0)));
        this.x = new THREE.Vector3(this.width, 0, 0);
        this.z = new THREE.Vector3(0,0,this.height);
        this.renderedChunks = 0;
        this.planePositions = this.precalculateThePositions();
        this.isCenter = this.isCenter;
        this.addChunk = this.addChunk;
    }


    /**
     * Adds chunk to the ground
     */
    public addChunk():void 
    {
        if(this.renderedChunks <= 9){
            if(!this.isCenter())
            {
                this.planes.add(ShapeGenerator.generatePlane(this.width, this.height, this.planePositions[this.renderedChunks]));
                this.renderedChunks++;
            }
            else this.renderedChunks++;
        }
        else{
            alert('maximum size of the safari reached');
        }
    }

    /**
     * Appends floor in the scene
     * @param scene scene where to append group of planes
     */
    public appednInScene(scene :Scene)
    {
        scene.add(this.planes);
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
    private precalculateThePositions (): Array<THREE.Vector3>{
        const center = new THREE.Vector3(0,0,0);
        const operationMatrix :Array<THREE.Vector3> =[
            new SafariVector(this.x.clone().sub(this.z)),    new SafariVector(this.x.clone()),       new SafariVector(this.z.clone().add(this.x)),
            //------------------------------------------------------------------------------------------------------------------------------------
            new SafariVector(this.z.clone().negate()),            center,          new SafariVector(this.z.clone()),
            //------------------------------------------------------------------------------------------------------------------------------------
            new SafariVector(this.z.clone().sub(this.x)),   new SafariVector(this.x.clone().negate()),      new SafariVector(this.x.clone().negate().add(this.z.clone().negate())) 
        ]
        return operationMatrix;
    }

    /**
     * Checks if currently rendered chunk is in the center of the floor
     * @returns true if yes otherwise false
     */
    private isCenter(): boolean{
        return this.renderedChunks == 4;
    }
}
