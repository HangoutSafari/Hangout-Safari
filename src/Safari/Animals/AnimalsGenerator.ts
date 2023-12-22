import  * as THREE from 'three'
import type { Animal } from './Animal';
import type { Scene } from '../Scene/Scene';
import type { OrthoCamera } from '../Camera/OrthoCamera';
import type { AnimalEventDispatcher } from './AnimalEventDispatcher';
let INTERSECTED = null;

export class AnimalsGenerator 
{
    private animals: THREE.Group;
    private rayCaster: THREE.Raycaster;
    private animalEventDispatcher: AnimalEventDispatcher;

    public constructor(animalEventDispatcher: AnimalEventDispatcher)
    {
        this.animalEventDispatcher = animalEventDispatcher;
        this.animals = new THREE.Group();
        this.rayCaster = new THREE.Raycaster();
        this.rayCaster.near = 0.1;
        this.rayCaster.far = 2000;
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

    public checkForMouseHover(mousePos: THREE.Vector2, camera:OrthoCamera, scene: Scene)
    {
        this.rayCaster.setFromCamera(mousePos, camera);
        //after we 
        let intersects = this.rayCaster.intersectObjects(this.animals.children, true);
        if (intersects.length > 0) {
            let hoveredAnimal = intersects[0].object as Animal;
        
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
}