import * as THREE from 'three'
import { ShapeGenerator } from '../Geometry/ShapeGenerator';
import type { SafariVector } from '../Math/SafariVector';
import { degToRad } from 'three/src/math/MathUtils';

export class Floor extends THREE.Mesh
{
    private width: number;
    private height: number;

    public constructor(widht: number,position:SafariVector)
    {
        super();
        
        this.width = widht;
        this.height = this.width;
        this.geometry = new THREE.PlaneGeometry(widht,this.height);
        this.material = new THREE.MeshPhysicalMaterial({color:THREE.Color.NAMES.orangered, side:THREE.DoubleSide , roughness:0.5, metalness: 0.8});    
        const translationMatrix = new THREE.Matrix4();
        translationMatrix.makeTranslation(position);
        this.rotateX(degToRad(90));
        this.applyMatrix4(translationMatrix);
    }
}