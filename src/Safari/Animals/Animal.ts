import * as THREE from 'three'
import { loadModel } from '../ModelLoader/ModelLoader';
import { mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils';
import { degToRad } from 'three/src/math/MathUtils';
export class Animal extends THREE.Mesh
{

    public isHoveredOn: boolean

    public constructor(path: string, position: THREE.Vector3, name: string = "undefined animal")
    {
        super();
        this.name = name;
        this.isHoveredOn = false;
        loadModel(path)
        .then(loadedModel => {
            const geometry = (loadedModel.scene.children[0] as THREE.Mesh).clone().geometry;
            const material = (loadedModel.scene.children[0] as THREE.Mesh).clone().material;
            this.castShadow = true;
            this.geometry = geometry;
            this.material = material;

            const translation = new THREE.Matrix4();
            translation.makeTranslation(position);
            this.applyMatrix4(translation);
            this.scale.set(0.2,0.2,0.2);
            this.rotateY(degToRad(40));
        })
    } 

    public processHover()
    {
        this.isHoveredOn = true;
        
        console.log(this.name + "is hovered on");
    }

    public processHoverCanceled()
    {
        this.isHoveredOn = false;
    }
}