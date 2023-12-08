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
        const textureLoader = new THREE.TextureLoader();
        const color = textureLoader.load('/textures/debug2.jpg')
        this.width = widht;
        this.height = this.width;
        this.geometry = new THREE.PlaneGeometry(widht,this.height);
        this.material = new THREE.MeshPhysicalMaterial({map: color, side:THREE.DoubleSide ,metalness: 0.9,roughness: 0.5});    
        const translationMatrix = new THREE.Matrix4();
        translationMatrix.makeTranslation(position);
        this.rotateX(degToRad(90));
        this.applyMatrix4(translationMatrix);
    }
}