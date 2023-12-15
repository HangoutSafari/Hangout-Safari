import * as THREE from 'three'
import { ShapeGenerator } from '../Geometry/ShapeGenerator';
import type { SafariVector } from '../Math/SafariVector';
import { degToRad } from 'three/src/math/MathUtils';
import { FloorGenerator } from '../Geometry/FloorGenerator';
import { Floor } from './Floor';
import { Vegetation } from './Vegetation';
import { loadModel } from '../ModelLoader/ModelLoader';
import { Models } from '../Types/SafariModelLoadingTypes';


export class Chunk extends THREE.Object3D
{
    public constructor(index: number,position:SafariVector)
    {
        super();
        console.log(index);
        this.castShadow = true;
        this.receiveShadow = true;
        console.log('trying to load: '+ Models[index]);
        loadModel(Models[index])
        .then(model =>{
            const translationMatxi = new THREE.Matrix4();
            translationMatxi.makeTranslation(position);
            model.scene.traverse(child =>{
                child.castShadow = true;
                child.receiveShadow = true;
            });
            model.scene.position.set(0,0,0);
            model.scene.scale.set(2.4, 2.4, 2.4);
            model.scene.applyMatrix4(translationMatxi);
            this.add(model.scene);
        });
    }
}