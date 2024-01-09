import * as THREE from 'three'
import { FloorGenerator } from './Geometry/FloorGenerator'
import { AnimalsGenerator } from './Animals/AnimalsGenerator'
import type { AnimalEventDispatcher } from './Animals/AnimalEventDispatcher';
import type { Scene } from './Scene/Scene';
import { Animal, RARITY } from './Animals/Animal';
import { AnimalsModels } from './Types/AnimalModelsPathTypes';
import { randInt } from 'three/src/math/MathUtils';
import type { Camera } from './Camera/Camera';
import type { Chunk } from './Chunk/Chunk';

export class SafariGenerator{
    private animalGenerator: AnimalsGenerator;
    private floorGenerator: FloorGenerator;
    private isFirstAnimal: boolean = true;
    public constructor(animalEventDispatcher: AnimalEventDispatcher){
        this.animalGenerator = new AnimalsGenerator(animalEventDispatcher);
        this.floorGenerator = new FloorGenerator(); 
    }

    public add(){
        if(this.isFirstAnimal) {
            this.animalGenerator.addAnimal(new Animal(AnimalsModels[randInt(0, 8)],(this.floorGenerator.chunks.children[0] as Chunk).randomAnimalPosition, "Ranom animal string", RARITY.common, "ranodm", 0, 10));    
            this.isFirstAnimal = false;
        }
        else{
            const animalPosition = this.floorGenerator.addChunk().randomAnimalPosition;
            const newAnimalPostion = new THREE.Vector3(animalPosition.x, 20, animalPosition.z);
            this.animalGenerator.addAnimal(new Animal(AnimalsModels[randInt(0, 8)],newAnimalPostion, "Ranom animal string", RARITY.common, "random", 0, 10));    
        }
    }

    public appendInScene(scene: Scene): void{
        this.floorGenerator.appednInScene(scene);
        this.animalGenerator.appednInScene(scene);
    }

    public processMouseMovement(mousePos: THREE.Vector2, camera: Camera){
        this.animalGenerator.checkForMouseHover(mousePos, camera)
    }
}