// 2. Add a type that would cover the structure of the given object:

enum AnimalType {
	Dog,
	Cat,
}

interface Pet {
	type: AnimalType;
	name: string;
	age: number;
}

function getPetDescription(pet: Pet) {
	const animal = AnimalType[pet.type];
	return `${pet.name} is a ${animal.toLowerCase()} that is ${pet.age} years old.`;
}

const myPet = {
	name: 'Fluffy',
	age: 5,
	type: AnimalType.Cat,
};

console.log(getPetDescription(myPet));
