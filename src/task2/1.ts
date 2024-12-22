// 1. Create an enum that would fit as argument for the given function:

enum Animals {
	Dog,
	Cat,
	Bird,
	Fish,
}

function makeAnimalSound(type: Animals) {
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
