import * as THREE from 'three'
import { ShapeGenerator } from '../Geometry/ShapeGenerator';
import type { SafariVector } from '../Math/SafariVector';
import { degToRad } from 'three/src/math/MathUtils';
import { FloorGenerator } from '../Geometry/FloorGenerator';
import { Floor } from './Floor';
import { Vegetation } from './Vegetation';

export class Chunk extends THREE.Group
{
    private width: number;
    private height: number;

    public constructor(widht: number,position:SafariVector)
    {
        super();
        this.add(new Floor(widht, position));
        this.add(new Vegetation(20, widht));
    }
}