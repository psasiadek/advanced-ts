"use strict";
// 4. Create a generic function that would make the following code compile:
var AnimalType;
(function (AnimalType) {
    AnimalType[AnimalType["Dog"] = 0] = "Dog";
    AnimalType[AnimalType["Cat"] = 1] = "Cat";
    AnimalType[AnimalType["Bird"] = 2] = "Bird";
})(AnimalType || (AnimalType = {}));
const myPets = [
    { name: 'Max', age: 3, type: AnimalType.Dog },
    { name: 'Fluffy', age: 1, type: AnimalType.Cat },
    { name: 'Tweety', age: 2, type: AnimalType.Bird },
];
const mapPetNames = (pets) => pets.map(({ name }) => name);
const petNames = mapPetNames(myPets);
console.log(petNames); // ['Max', 'Fluffy', 'Tweety']
/* ******************************************************************************************************************************** */
function print(arg) {
    console.log(arg);
}
print('hello');
print(42);
print(true);
/* ******************************************************************************************************************************** */
function firstElement(arr) {
    return arr[0];
}
const numbers = [1, 2, 3, 4, 5];
const firstNumber = firstElement(numbers); // firstNumber is of type number
const strings = ['apple', 'banana', 'orange'];
const firstString = firstElement(strings); // firstString is of type string
/* ******************************************************************************************************************************** */
let pair1 = { first: 'one', second: 1 }, pair2 = { first: () => { }, second: [] }, pair3 = { first: true, second: { x: 1 } };
