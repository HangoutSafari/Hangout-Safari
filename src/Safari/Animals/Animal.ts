import * as THREE from 'three'
import { ShapeGenerator } from '../Geometry/ShapeGenerator';

export class Animal extends THREE.Object3D
{
    public path;

    public constructor(position: THREE.Vector3)
    {
        super();
        this.add(ShapeGenerator.generateBox(50,50,50));
        const translation = new THREE.Matrix4();
        translation.makeTranslation(position);
        this.applyMatrix4(translation);
    }

    public move(position: THREE.Vector3)
    {
        const translation = new THREE.Matrix4();
        translation.makeTranslation(position);
        this.applyMatrix4(translation);
    }
}