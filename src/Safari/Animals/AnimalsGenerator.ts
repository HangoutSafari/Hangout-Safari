import  * as THREE from 'three'
import type { Animal } from './Animal';
import type { Scene } from '../Scene/Scene';
import type { OrthoCamera } from '../Camera/OrthoCamera';
import TileSource from 'ol/source/Tile';
let INTERSECTED = null;

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
        let intersects = this.rayCaster.intersectObjects(this.animals.children, true);
        if ( intersects.length > 0 ) {

            if ( INTERSECTED != intersects[ 0 ].object ) {

                if ( INTERSECTED ){
                    INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
                } 

                INTERSECTED = intersects[ 0 ].object;
                INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
                INTERSECTED.material.emissive.setHex( 0xffff00 );

            }

        } else {

            if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

            INTERSECTED = null;

        }
    }
}