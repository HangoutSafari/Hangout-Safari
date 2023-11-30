import { describe, it, expect, expectTypeOf } from "vitest";
import * as THREE from 'three';
import { loadModel } from "../../../Safari/ModelLoader/ModelLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

describe('Testing if model is loaded correctly', ()=>{
    it("loads model and checks against model loaded via gltfLoader", ()=>{
      const scene = new THREE.Scene();
      const glLoader = new GLTFLoader();
      const model = loadModel('/models/savana2.glb'); 
      model.then(()=>{ 
          glLoader.load('/models/savana2.glb', (model)=>{
            scene.add(model.scene);
          })
          expect(model).toBe(scene.children);
      })
    })
});