import * as THREE from 'three'
import { ShapeGenerator } from '../Geometry/ShapeGenerator';
import type { SafariVector } from '../Math/SafariVector';
import { degToRad } from 'three/src/math/MathUtils';
import { FloorGenerator } from '../Geometry/FloorGenerator';
import { Floor } from './Floor';
import { Vegetation } from './Vegetation';
import { loadModel } from '../ModelLoader/ModelLoader';

export class Chunk extends THREE.Object3D
{
    private width: number;
    private height: number;

    public constructor(widht: number,position:SafariVector)
    {
        super();
        loadModel('/models/chunk_center.gltf')
        .then(model =>{
            const translationMatxi = new THREE.Matrix4();
            translationMatxi.makeTranslation(position);
            model.scene.traverse(child =>{
                child.castShadow = true;
            });
            model.scene.scale.set(2.4, 2.4,2.4);
            model.scene.applyMatrix4(translationMatxi);
            this.add(model.scene);
        });
    }
}