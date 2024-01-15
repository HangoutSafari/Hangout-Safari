import type { RARITY } from "../Animals/Animal"

export enum AnimalModel{
    CROCODILE = '/models/Animals/crocodile.glb',
    DEER = '/models/Animals/deer.glb', 
    ELEPHANT = '/models/Animals/elephant.glb',
    HIPPO = '/models/Animals/hippo.glb',
    LION = '/models/Animals/lion.glb',
    MONKEY = '/models/Animals/monkey.glb',
    OSTRICH = '/models/Animals/ostrich.glb', 
    RABBIT = '/models/Animals/rabbit.glb', 
    GIRRAFE = '/models/Animals/giraffe.glb',
    FROG = '/models/Animals/frog.glb'
}


type IndexAnimal = {
    [key: number]: {
        model: AnimalModel,
        scale: number,
        name?: string,
        rotation?:number,
        imagePath?:string
        rarity?: RARITY;
    }
}

export const AnimalsModels: IndexAnimal = {
    0: { model: AnimalModel.CROCODILE, scale: 2, rotation: Math.random() * 360, imagePath: "images/modelImages/crocodile.png", name: "Snappy" },
    1: { model: AnimalModel.DEER, scale: 2, rotation: Math.random() * 360, imagePath: "images/modelImages/deer.png", name: "Bambi" },
    2: { model: AnimalModel.ELEPHANT, scale: 3, rotation: Math.random() * 360, imagePath: "images/modelImages/elephant.png", name: "Jumbo" },
    3: { model: AnimalModel.HIPPO, scale: 3, rotation: Math.random() * 360, imagePath: "images/modelImages/hippo.png", name: "Splash" },
    4: { model: AnimalModel.LION, scale: 2.5, rotation: Math.random() * 360, imagePath: "images/modelImages/lion.png", name: "Roary" },
    5: { model: AnimalModel.MONKEY, scale: 2, rotation: Math.random() * 360, imagePath: "images/modelImages/monkey.png", name: "Chatterbox" },
    6: { model: AnimalModel.OSTRICH, scale: 2.8, rotation: Math.random() * 360, imagePath: "images/modelImages/ostrich.png", name: "Swiftie" },
    7: { model: AnimalModel.RABBIT, scale: 1.2, rotation: Math.random() * 360, imagePath: "images/modelImages/rabbit.png", name: "Thumper" },
    8: { model: AnimalModel.GIRRAFE, scale: 4, rotation: Math.random() * 360, imagePath: "images/modelImages/giraffe.png", name: "Stretch" },
    9: { model: AnimalModel.FROG, scale: 1, rotation: Math.random() * 360, imagePath: "images/modelImages/frog.png", name: "Hopper" },
}