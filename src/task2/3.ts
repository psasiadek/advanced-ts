// 3. Add an interface that would cover the structure of the given object(reuse the type from the previous task):

enum AnimalType {
	Dog,
	Cat,
}

interface BasicInfo {
	name: string;
	age: number;
}

interface Pet extends BasicInfo {
	type: AnimalType;
}

interface Owner extends BasicInfo {
	pets: Pet[];
}

function getPetOwnerDescription(owner: Owner) {
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
