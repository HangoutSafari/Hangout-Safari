import * as THREE from 'three'
import { FloorGenerator } from './Geometry/FloorGenerator'
import { AnimalsGenerator } from './Animals/AnimalsGenerator'
import type { AnimalEventDispatcher } from './Animals/AnimalEventDispatcher';
import type { Scene } from './Scene/Scene';
import { Animal, RARITY } from './Animals/Animal';
import { AnimalsModels } from './Types/AnimalModelsPathTypes';
import { randInt } from 'three/src/math/MathUtils';
import type { Camera } from './Camera/Camera';

export class SafariGenerator{
    private animalGenerator: AnimalsGenerator;
    private floorGenerator: FloorGenerator;

    public constructor(animalEventDispatcher: AnimalEventDispatcher){
        this.animalGenerator = new AnimalsGenerator(animalEventDispatcher);
        this.floorGenerator = new FloorGenerator();
    }

    public add(){
        const animalPosition = this.floorGenerator.addChunk().randomAnimalPosition;
        const newAnimalPostion = new THREE.Vector3(animalPosition.x, 4, animalPosition.z);
        this.animalGenerator.addAnimal(new Animal(AnimalsModels[randInt(0, 8)],newAnimalPostion, "Ranom animal string", RARITY.common, "ranodm", randInt(0,90), 10));
    }

    public appendInScene(scene: Scene): void{
        this.floorGenerator.appednInScene(scene);
        this.animalGenerator.appednInScene(scene);
    }

    public processMouseMovement(mousePos: THREE.Vector2, camera: Camera){
        this.animalGenerator.checkForMouseHover(mousePos, camera)
    }
}