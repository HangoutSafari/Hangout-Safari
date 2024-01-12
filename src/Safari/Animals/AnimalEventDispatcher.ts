import * as THREE from 'three'
import type { Animal } from './Animal';

export class AnimalEventDispatcher extends THREE.EventDispatcher
{
    showAnimal(animal: Animal){
        this.dispatchEvent({type: "showAnimal",name: animal.name, rarity: animal.rarity, achievedFrom: animal.event, image: animal.imagePath} as never)
    }
}