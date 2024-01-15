import * as THREE from 'three'
import { loadModel } from '../ModelLoader/ModelLoader';
import { degToRad, randInt } from 'three/src/math/MathUtils';
import { AnimalEventDispatcher } from './AnimalEventDispatcher';
import type { AnimalModel } from '../Types/AnimalModelsPathTypes.ts';

export enum RARITY{
    rare = "rare",
    common = "comon",
    uncommon = "unomon",
    epic = "epic"
}

export class Animal extends THREE.Mesh
{
    public isHoveredOn: boolean

    private rarity: RARITY;

    private animationScale :number;

    private event: string;

    private imagePath: string;

    private animalEventDispatcher: AnimalEventDispatcher

    private initialScale: number;
    
    private initialRotations: THREE.Vector3;

    private initialPosition: THREE.Vector3;
  
    public constructor(imagePath: string, path: string, position: THREE.Vector3, name: string = "undefined animal", rarity:RARITY = RARITY.common, event: string = "unknown event",rotation: number = 0, scale: number = 1)
    {
        super();
        this.imagePath = imagePath;
        this.name = name;
        this.rarity = rarity;
        this.event = event;
        this.initialScale = scale;
        this.isHoveredOn = false;
        this.animationScale = scale;
        this.animalEventDispatcher = new AnimalEventDispatcher();
        this.initialPosition = new THREE.Vector3();
        this.initialRotations = new THREE.Vector3();
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
            this.scale.setScalar(scale);
            this.rotateX(degToRad(90));
            this.rotateZ(degToRad(rotation));
        })

        this.initialRotations.x = this.rotation.x;
        this.initialRotations.y = this.rotation.y;
        this.initialRotations.z = this.rotation.z;

        this.initialPosition = this.position;

        this.processClickEvent=  this.processClickEvent.bind(this);
        window.addEventListener('click', this.processClickEvent);
    }

    public setCustomName(name: string) {
        this.name = name;
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

    public lsd_update(){
        this.animationScale += 0.08;

        const jumpHeight = 5.5;
        const verticalOffset = Math.min((Math.sin(this.animationScale) * jumpHeight - 2), jumpHeight);
      
        // Apply vertical offset to scale
        this.scale.setScalar(20 + verticalOffset);
      
        // Rotate the object during the jump
        const rotationSpeed = 0.1;
        this.rotation.z += rotationSpeed;
        this.rotation.x += rotationSpeed;
        this.rotation.y += rotationSpeed;

        const colorVariation = Math.abs(Math.sin(this.animationScale * 0.5)); // Adjust the factor for different color variations
        (this.material as THREE.MeshBasicMaterial).color.setRGB(colorVariation, 1 - colorVariation, 1); // Adjust the color properties as needed
    
    }

    public update(){
        const minSize = Math.floor(this.initialScale/2);
        let K = 3.8;
        let a = this.initialScale / 8.7;
        let x = this.animationScale += 0.08;
        let b = 1.3;


        const offset = Math.abs(a * Math.cos(x/b) + K)
        
        // Apply vertical offset to scale
        this.scale.setScalar((this.initialScale + offset)/2);
    }
}