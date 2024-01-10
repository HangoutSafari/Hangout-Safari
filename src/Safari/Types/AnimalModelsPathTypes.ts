
export enum AnimalModel{
    CROCODILE = '/models/Animals/crocodile.glb',
    DEER = '/models/Animals/deer.glb', 
    ELEPHANT = '/models/Animals/elephant.glb',
    HIPPO = '/models/Animals/hippo.glb',
    LION = '/models/Animals/lion.glb',
    MONKEY = '/models/Animals/monkey.glb',
    OSTRICH = '/models/Animals/ostrich.glb', 
    RABBIT = '/models/Animals/rabbit.glb', 
    GIRRAFE = '/models/Animals/giraffe.glb'
}


type IndexAnimal = {
    [key: number]: {
        model: AnimalModel,
        scale: number,
        rotation?:number
    }
}

export const AnimalsModels: IndexAnimal = {
    0: { model: AnimalModel.CROCODILE, scale: 2, rotation: Math.random() * 360 },
    1: { model: AnimalModel.DEER, scale: 2, rotation: Math.random() * 360 },
    2: { model: AnimalModel.ELEPHANT, scale: 3, rotation: Math.random() * 360 },
    3: { model: AnimalModel.HIPPO, scale: 3, rotation: Math.random() * 360 },
    4: { model: AnimalModel.LION, scale: 2.5, rotation: Math.random() * 360 },
    5: { model: AnimalModel.MONKEY, scale: 2, rotation: Math.random() * 360 },
    6: { model: AnimalModel.OSTRICH, scale: 2.8, rotation: Math.random() * 360 },
    7: { model: AnimalModel.RABBIT, scale: 1.2, rotation: Math.random() * 360 },
    8: { model: AnimalModel.GIRRAFE, scale: 4, rotation: Math.random() * 360 },
}