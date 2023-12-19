import  * as THREE from 'three'
import type { Animal } from './Animal';
import type { Scene } from '../Scene/Scene';

export class AnimalsGenerator 
{
    private animals: THREE.Group;
    private ryaCaster: THREE.Raycaster;
    public constructor()
    {
        this.animals = new THREE.Group();
    }

    public addAnimal(animal:Animal)
    {
        this.animals.add(animal);
    }

    public appednInScene(scene: Scene)
    {
        scene.add(this.animals);
    }

    public checkForMouseHover(mousePos: THREE.Vector2)
    {
        console.log('mouse X %d', mousePos.x);
        console.log('mouse Y %d', mousePos.y);
    }
}