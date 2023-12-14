import * as THREE from 'three'
import { ShapeGenerator } from '../Geometry/ShapeGenerator';
import type { SafariVector } from '../Math/SafariVector';
import { degToRad } from 'three/src/math/MathUtils';
import { FloorGenerator } from '../Geometry/FloorGenerator';
import { Floor } from './Floor';
import { Vegetation } from './Vegetation';
import { loadModel } from '../ModelLoader/ModelLoader';

enum Models{
    CENTER = "/models/Chunks/center.glb",
    BOTTOM_CENTER = "/models/Chunks/bottom_center.glb",
    BOTTOM_RIGHT = "/models/Chunks/bottom_right.glb",
    CENTER_LEFT = "/models/Chunks/center_left.glb",
    CENTER_RIGHT = "/models/Chunks/center_right.glb",
    CENTER_TOP = "/models/Chunks/center_top.glb",
    TOP_LEFT = "/models/Chunks/top_left.glb",
    TOP_RIGHT = "/models/Chunks/top_right.glb",
}

export class Chunk extends THREE.Object3D
{
    private width: number;
    private height: number;

    public constructor(widht: number,position:SafariVector)
    {
        super();
        loadModel(Models.CENTER)
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