import { describe, it, expect, expectTypeOf } from "vitest";
import * as THREE from 'three';
import { Safari } from "../../../Safari/Safari";
import { ShapeGenerator } from "../../../Safari/Geometry/ShapeGenerator";

describe('Testing if correct geometry is generated', ()=>{
    it("creates cube and checks if the mesh is cube", ()=>{
        const cube = ShapeGenerator.generateBox(10,10,10, THREE.Color.NAMES.aqua);
        const result = new THREE.BoxGeometry(0,0,0).type ;
        expect(cube.geometry.type).toBe(result);
    })
});

describe('Testing if correct geometry is generated', ()=>{
    it("creates plane and checks if the mesh is plane", ()=>{
        const cube = ShapeGenerator.generatePlane(10,10, THREE.Color.NAMES.aliceblue);
        const result = new THREE.PlaneGeometry(0,0,0).type;
        expect(cube.geometry.type).toBe(result);
    })
});

describe('Testing if correct material is generated', ()=>{
    it("creates cube and checks if the material is correctly configured", ()=>{
        const cube = ShapeGenerator.generateBox(10,10,10, THREE.Color.NAMES.aliceblue);
        const correctMatrial = new THREE.MeshPhysicalMaterial({ color: 0xf0f8ff, metalness:0.7, roughness:0.1,});

        expect(cube.material.type).toBe(correctMatrial.type)
    })
});

describe('Testing if correct material is generated', ()=>{
    it("creates plane and checks if the material is correctly configured", ()=>{
        const cube = ShapeGenerator.generatePlane(10,10, THREE.Color.NAMES.aliceblue);
        const correctMatrial = new THREE.MeshPhongMaterial({ color: 0xf0f8ff, side: THREE.DoubleSide});
    
        expect(cube.material.type).toBe(correctMatrial.type);
    })
});






   

