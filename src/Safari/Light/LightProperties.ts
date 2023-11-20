import type * as THREE from "three";
import { browser } from "$app/environment";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MapControls } from "three/examples/jsm/controls/MapControls.js";
import { construct_svelte_component } from "svelte/internal";

export default class LightProperties{
    public AmbientLight: THREE.AmbientLight;
    LightProperties: LightProperties;

    constructor(lightColor: number, intensity: number){
        this.AmbientLight = lightColor;
        this.LightProperties = intensity;
    }
    Safari.AmbientLight():{
        
    }
} 