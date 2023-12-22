import * as THREE from 'three'
import type { Animal } from './Animal';

export class AnimalEventDispatcher extends THREE.EventDispatcher
{
    showAnimal(animal: Animal){
        this.dispatchEvent({type: "showAnimal",a_name: "name"})
    }
}