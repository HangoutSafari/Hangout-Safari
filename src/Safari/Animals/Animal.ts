import * as THREE from 'three'
import { loadModel } from '../ModelLoader/ModelLoader';
import { degToRad, randInt } from 'three/src/math/MathUtils';
import { AnimalEventDispatcher } from './AnimalEventDispatcher';
import type { AnimalModel } from '../Types/AnimalModelsPathTypes';

export enum RARITY{
    rare = "rare",
    common = "comon",
    uncomon = "unomon"
}

export class Animal extends THREE.Mesh
{
    public isHoveredOn: boolean

    private rarity: RARITY;

    private event: string;

    private animalEventDispatcher: AnimalEventDispatcher

    public constructor(path: AnimalModel, position: THREE.Vector3, name: string = "undefined animal", rarity:RARITY = RARITY.common, event: string = "unknown event",rotation: number = 0, scale: number = 1)
    {
        super();
        this.name = name;
        this.rarity = rarity;
        this.event = event;
        this.isHoveredOn = false;
        this.animalEventDispatcher = new AnimalEventDispatcher();
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
            this.rotateX(degToRad(90));
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
        (this.material as THREE.MeshPhongMaterial).emissive.setHex( 0xfdb157 );
    }

    /**
     * Invoked when cursor is no longer hovered on the animal
     */
    public processHoverCanceled()
    {   
        this.isHoveredOn = false;
        (this.material as THREE.MeshPhongMaterial).emissive.setHex(0x00000); 
    }

    public processClickEvent()
    {
        if(this.isHoveredOn)
        {
            this.animalEventDispatcher.showAnimal(this);
        }

    }

    public setEventDisptcher(animalEventDispatcher: AnimalEventDispatcher): void{
        this.animalEventDispatcher = animalEventDispatcher; 
    }
}