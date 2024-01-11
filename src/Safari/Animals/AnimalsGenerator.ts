import  * as THREE from 'three'
import { Animal } from './Animal';
import type { OrthoCamera } from '../Camera/OrthoCamera';
import type { AnimalEventDispatcher } from './AnimalEventDispatcher';
import { RARITY } from './Animal';
import type { Scene } from '../Scene/Scene';
let INTERSECTED = null;


export class AnimalsGenerator 
{
    public animals: THREE.Group;
    private rayCaster: THREE.Raycaster;
    private animalEventDispatcher: AnimalEventDispatcher;

    public constructor(animalEventDispatcher: AnimalEventDispatcher)
    {
        this.animalEventDispatcher = animalEventDispatcher;
        this.animals = new THREE.Group();
        this.rayCaster = new THREE.Raycaster();
        this.rayCaster.near = 1;
        this.rayCaster.far = 6000;
    }

    public addAnimal(animal:Animal)
    {
        animal.setEventDisptcher(this.animalEventDispatcher);
        this.animals.add(animal);
    }

    public appednInScene(scene: Scene)
    {
        scene.add(this.animals);
    }

    public checkForMouseHover(mousePos: THREE.Vector2, camera:THREE.Camera)
    {
        this.rayCaster.setFromCamera(mousePos, camera);
        //after we 
        let colided = this.rayCaster.intersectObjects(this.animals.children, true);
        if (colided.length > 0) {
            let hoveredAnimal = colided[0].object as Animal;
        
            if (INTERSECTED !== hoveredAnimal) {
                if (INTERSECTED) {
                    INTERSECTED.processHoverCanceled();
                }
    
                INTERSECTED = hoveredAnimal;
                INTERSECTED.processHover();
            }
        } else {
            if (INTERSECTED) {
                INTERSECTED.processHoverCanceled();
            }
        
            INTERSECTED = null;
        }
    }
    
    private generatePosition(): THREE.Vector3
    {
        return new THREE.Vector3(0,0,0);
    }
}