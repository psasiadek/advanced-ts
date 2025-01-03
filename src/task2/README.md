Original code

```js
// 1. Create an enum that would fit as argument for the given function:
function makeAnimalSound(type) {
	switch (type) {
		case 0:
			console.log('Woof!');
			break;
		case 1:
			console.log('Meow!');
			break;
		case 2:
			console.log('Chirp!');
			break;
		case 3:
			console.log('Blub!');
			break;
		default:
			console.log('Unknown animal type');
			break;
	}
}

// 2. Add a type that would cover the structure of the given object:
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

// 3. Add an interface that would cover the structure of the given object(reuse the type from the previous task):
function getPetOwnerDescription(owner) {
	const pets = owner.pets.map(pet => {
		const animal = AnimalType[pet.type];
		return `${pet.name} the ${animal.toLowerCase()}`;
	});
	return `${owner.name} is ${owner.age} years old and has ${pets.length} pets: ${pets.join(', ')}.`;
}

const myPetOwner = {
	name: 'John Doe',
	age: 30,
	pets: [
		{
			name: 'Fluffy',
			age: 5,
			type: AnimalType.Cat,
		},
		{
			name: 'Spot',
			age: 3,
			type: AnimalType.Dog,
		},
	],
};

console.log(getPetOwnerDescription(myPetOwner));

// 4. Create a generic function that would make the following code compile:
const myPets = [
	{ name: 'Max', age: 3, type: AnimalType.Dog },
	{ name: 'Fluffy', age: 1, type: AnimalType.Cat },
	{ name: 'Tweety', age: 2, type: AnimalType.Bird },
];

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
let pair1 = { first: 'one', second: 1 };
pair2 = { first: () => {}, second: [] };
pair3 = { first: true, second: { x: 1 } };

// 5. Create a decorator '@log' that would print given message:
class MyClass {
	@log
	myMethod(arg1, arg2) {
		return arg1 + arg2;
	}
}

const myObj = new MyClass();
myObj.myMethod(2, 3);
// Result:
// Calling myMethod with arguments: [2, 3]
// Result: 5

// 6. Create a mixin that will add the ability to play, pause, and stop a video, as well as to show its duration and current playback time.
/*
  -Create a TypeScript mixin named Playable that will add the functionality to a video class:
    -duration
    -currentTime
    -play()
    -pause()
    -stop()
    -getDuration()
    -getCurrentTime()
  -Create instances of each video class and test their Playable functionality by calling the methods and displaying their properties.
  */
class RegularVideo {
	constructor(title, url) {
		this.title = title;
		this.url = url;
	}
}

class PremiumVideo {
	constructor(title, url) {
		this.title = title;
		this.url = url;
	}
}

class LiveVideo {
	constructor(title, url) {
		this.title = title;
		this.url = url;
	}
}

// 7. Apply typescript utility types to the given type:
/*
    -Create a new type from the given one
        -where all the properties are optional
        -where all the properties are required
        -where all the properties are readonly
        -with only properties specified: name, age, isStudent, hobbies
        -with the specified properties omited: job, phoneNumbers, birthday
        -union type where values are given type's keys
    -
  */
type MyType = {
	name: string,
	age: number,
	isStudent: boolean,
	hobbies: string[],
	address: {
		street: string,
		city: string,
		country: string,
	},
	email?: string,
	job?: {
		title: string,
		company: string,
		salary: number,
	},
	phoneNumbers: Map<string, string>,
	birthday: Date,
};
```
