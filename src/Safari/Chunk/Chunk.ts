import * as THREE from 'three'
import { ShapeGenerator } from '../Geometry/ShapeGenerator';
import type { SafariVector } from '../Math/SafariVector';
import { degToRad } from 'three/src/math/MathUtils';
import { FloorGenerator } from '../Geometry/FloorGenerator';
import { Floor } from './Floor';
import { Vegetation } from './Vegetation';
import { loadModel } from '../ModelLoader/ModelLoader';
import { Models } from '../Types/SafariModelLoadingTypes';

function generateNumber(max: number) : number{
    return Math.floor(Math.random() * max);
}

export class Chunk extends THREE.Object3D
{
    public randomAnimalPosition: THREE.Vector3;
    private forbidenPositions: Array<THREE.Vector3>  = new Array<THREE.Vector3>;
    public constructor(index: number,position:SafariVector, width: number = 500)
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
            let boundingBoxes = new THREE.Group();
            model.scene.traverse(child =>{
                child.castShadow = true;
                child.receiveShadow = true;
                boundingBoxes.add(new THREE.BoxHelper( child, 0xffff00 ))
            }); 
            model.scene.position.set(0,0,0);
            model.scene.scale.set(2.4, 2.4, 2.4);
            model.scene.applyMatrix4(translationMatxi);
            boundingBoxes.scale.set(2.4, 2.4, 2.4);
            boundingBoxes.applyMatrix4(translationMatxi);
            
            this.add(model.scene);
           // this.add(boundingBoxes);
        });
        console.log("Forbidend positions on the chunk are ")
        this.randomAnimalPosition = new THREE.Vector3(position.x + generateNumber(200), 46, position.z + generateNumber(200)); //new THREE.Vector3(this.position.x * generateNumber(width), 0, this.position.z * generateNumber(width));

    }

}