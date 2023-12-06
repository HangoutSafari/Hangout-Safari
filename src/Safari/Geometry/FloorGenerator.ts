import  * as THREE from 'three'
import { ShapeGenerator } from './ShapeGenerator';
import type { Scene } from '../Scene/Scene';

export class FloorGenerator
{
    public planes: THREE.Group;
    
    private x: THREE.Vector3;
    private z: THREE.Vector3;
    private width: number;
    private height: number;
    private numberOfplanesRendered;
    private planePositions: Array<THREE.Vector3>

    public constructor()
    {
        this.width = 40;
        this.height = this.width;
        this.planes = new THREE.Group();
        this.planes.add(ShapeGenerator.generatePlane(this.width,this.height));
        this.x = new THREE.Vector3(this.width/2, 0, 0);
        this.z = new THREE.Vector3(0,0,this.height/2);
        this.numberOfplanesRendered = 0;
        this.precalculateThePositions();
    }

    public appednInScene(scene :Scene)
    {
        scene.add(this.planes);
    }
    
    /**
     * Calculates position of planes 
     * |-----------------------|
     * |  x-z  |  2*x  |  z+x  |
     * |-----------------------|
     * | 2*-z  | 0,0,0 |  2*z  |
     * |-----------------------|
     * | -x-z  | 2*-X  | -x+z  |         
     * |-----------------------|
     * @returns Calculated ammount of position
     */
    private precalculateThePositions (): Array<THREE.Vector3>{
        const center = new THREE.Vector3(0,0,0);
        const operationMatrix :Array<THREE.Vector3> =[
            this.x.sub(this.z),            this.x.multiplyScalar(2),       this.z.add(this.x),
            //-----------------------------------------------------------------------------------------
            this.z.multiplyScalar(-2),            center,                  this.z.multiplyScalar(2),
            //-----------------------------------------------------------------------------------------
            this.z.sub(this.x.negate()),   this.x.multiplyScalar(-2),      this.x.negate().add(this.z) 
        ]
        return operationMatrix;
    }
}
