import * as THREE from 'three'
import { loadModel } from '../ModelLoader/ModelLoader';
import { mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils';
export class Animal extends THREE.Mesh
{
    public constructor(path: string, position: THREE.Vector3)
    {
        super();
        loadModel(path)
        .then(loadedModel => {
            const geometry = (loadedModel.scene.children[0] as THREE.Mesh).clone().geometry;
            const material = (loadedModel.scene.children[0] as THREE.Mesh).clone().material;

            this.geometry = geometry;
            this.material = material;

            const translation = new THREE.Matrix4();
            translation.makeScale(0.2,0.2,0.2);
            this.applyMatrix4(translation);
        
            
            console.log("Loaded animal", this);
        })
    } 
}