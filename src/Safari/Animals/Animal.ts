import * as THREE from 'three'
import { loadModel } from '../ModelLoader/ModelLoader';
import { mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils';
import { degToRad } from 'three/src/math/MathUtils';
export class Animal extends THREE.Mesh
{

    public isHoveredOn: boolean

    public constructor(path: string, position: THREE.Vector3, rotation: number, scale: number,name: string = "undefined animal")
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
            this.scale.set(scale, scale, scale);
            this.rotateY(degToRad(rotation));
        })
        this.processClickEvent=  this.processClickEvent.bind(this);
        window.addEventListener('click', this.processClickEvent);
    } 

    /**
     * Trigers when cursor is hovered over the animal
     */
    public processHover()
    {
        this.isHoveredOn = true;
        this.material.color.set( Math.random() * 0xffffff );
        
    }

    /**
     * Invoked when curor is no longer hovered on the animal
     */
    public processHoverCanceled()
    {   
        this.isHoveredOn = false;
        //this.material.color.set(0xffffff ); 
    }

    public processClickEvent()
    {
        if(this.isHoveredOn)
            console.log("you have clicked on "+ this.name);
    }
}