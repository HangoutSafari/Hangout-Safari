
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
    [key: number]: AnimalModel
}

export const AnimalsModels: IndexAnimal = {
    0: AnimalModel.CROCODILE,
    1: AnimalModel.DEER,
    2: AnimalModel.ELEPHANT,
    3: AnimalModel.HIPPO,
    4: AnimalModel.LION,
    5: AnimalModel.MONKEY,
    6: AnimalModel.OSTRICH,
    7: AnimalModel.RABBIT,
    8: AnimalModel.GIRRAFE
}