import  * as THREE from 'three'
import type { Animal } from './Animal';
import type { Scene } from '../Scene/Scene';
import type { OrthoCamera } from '../Camera/OrthoCamera';

export class AnimalsGenerator 
{
    private animals: THREE.Group;
    private rayCaster: THREE.Raycaster;
    public constructor()
    {
        this.animals = new THREE.Group();
        this.rayCaster = new THREE.Raycaster();
    }

    public addAnimal(animal:Animal)
    {
        this.animals.add(animal);
        // C syntax lol 
        console.log("Animal was created", this.animals );
    }

    public appednInScene(scene: Scene)
    {
        scene.add(this.animals);
    }

    public checkForMouseHover(mousePos: THREE.Vector2, camera:OrthoCamera, scene: Scene)
    {
        this.rayCaster.setFromCamera(mousePos, camera);
        //after we 
        const colided = this.rayCaster.intersectObjects(scene.children);
        if(colided.length>0)
        {
            console.log(colided);
        } 
        
    }
}