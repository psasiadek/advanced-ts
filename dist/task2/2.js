"use strict";
// 2. Add a type that would cover the structure of the given object:
var AnimalType;
(function (AnimalType) {
    AnimalType[AnimalType["Dog"] = 0] = "Dog";
    AnimalType[AnimalType["Cat"] = 1] = "Cat";
})(AnimalType || (AnimalType = {}));
function getPetDescription(pet) {
    const animal = AnimalType[pet.type];
    return `${pet.name} is a ${animal.toLowerCase()} that is ${pet.age} years old.`;
}
const myPet = {
    name: 'Fluffy',
    age: 5,
    type: AnimalType.Cat,
};
console.log(getPetDescription(myPet));
