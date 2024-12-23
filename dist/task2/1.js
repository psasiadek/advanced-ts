// 1. Create an enum that would fit as argument for the given function:
var Animals;
(function (Animals) {
    Animals[Animals["Dog"] = 0] = "Dog";
    Animals[Animals["Cat"] = 1] = "Cat";
    Animals[Animals["Bird"] = 2] = "Bird";
    Animals[Animals["Fish"] = 3] = "Fish";
})(Animals || (Animals = {}));
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
export {};
