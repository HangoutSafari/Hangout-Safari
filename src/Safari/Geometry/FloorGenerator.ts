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
    private numberOfplanesRendered;
    private planePositions: Array<THREE.Vector3>

    public constructor()
    {
        this.width = 20;
        this.height = this.width;
        this.planes = new THREE.Group();
        this.planes.add(ShapeGenerator.generatePlane(this.width ,this.height));
        this.x = new THREE.Vector3(this.width, 0, 0);
        this.z = new THREE.Vector3(0,0,this.height);
        this.numberOfplanesRendered = 0;
        this.planePositions = this.precalculateThePositions();
        console.log(this.planePositions);
        //this.preacalcualteThePsition_SimonM();
        this.renderPlanes = this.renderPlanes
    }

    private renderPlanes()
    {
        this.planePositions.forEach(position => {
            this.planes.add(ShapeGenerator.generatePlane(this.width, this.height, position));
        });
    }

    public appednInScene(scene :Scene)
    {
        this.renderPlanes();
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
     * @returns Calculated positions
     */
    private precalculateThePositions (): Array<THREE.Vector3>{
        const center = new THREE.Vector3(0,0,0);
        const operationMatrix :Array<THREE.Vector3> =[
            this.x.clone().sub(this.z),    this.x.clone(),       this.z.clone().add(this.x),
            //-----------------------------------------------------------------------------------------
            this.z.clone().negate(),            center,          this.z.clone(),
            //-----------------------------------------------------------------------------------------
            this.z.clone().sub(this.x),   this.x.clone().negate(),      this.x.clone().negate().add(this.z.clone().negate()) 
        ]
        return operationMatrix;
    }
}
