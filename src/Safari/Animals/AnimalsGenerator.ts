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

    public addAnimal(animal:THREE.Mesh)
    {
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
        let colided = this.rayCaster.intersectObjects(this.animals.children, true);
        
        if(colided.length>0)
        {
            const intersectedAnimal = colided[0].object;
            (intersectedAnimal as Animal).processHover();  
        }
    }
}