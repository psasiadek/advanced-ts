Original code:

```js
// 1. Cover the following code with types

function addNumbers(a, b) {
	return a + b;
}

function multiplyNumbers(a, b) {
	return a * b;
}

function findLargest(numbers) {
	let largest = -Infinity;

	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > largest) {
			largest = numbers[i];
		}
	}

	return largest;
}

function getLetterCount(str) {
	let letterCount = {};

	for (let i = 0; i < str.length; i++) {
		let letter = str[i].toLowerCase();
		if (letterCount[letter]) {
			letterCount[letter]++;
		} else {
			letterCount[letter] = 1;
		}
	}

	return letterCount;
}

const myNumber = 42;
const myString = 'Hello, TypeScript!';
const myBoolean = true;
const myArray = [1, 2, 3, 4, 5];
const myObject = { name: 'John Doe', age: 30 };

let myAny = 42;
myAny = 'Hello, TypeScript!';
myAny = { name: 'Jane Doe', age: 25 };
/* ******************************************************************************************************************************** */

function linearSearch(array, target) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === target) {
			return i;
		}
	}
	return -1;
}

function binarySearch(array, target) {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (array[mid] === target) {
			return mid;
		} else if (array[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
}

class Node {
	constructor(value) {
		this.value = value;
		this.children = [];
	}

	addChild(node) {
		this.children.push(node);
	}
}

function depthFirstSearch(root, target) {
	let stack = [root];

	while (stack.length > 0) {
		let node = stack.pop();
		if (node.value === target) {
			return node;
		}
		for (let i = node.children.length - 1; i >= 0; i--) {
			stack.push(node.children[i]);
		}
	}

	return null;
}

let root = new Node(1);
let child1 = new Node(2);
let child2 = new Node(3);
let grandchild1 = new Node(4);
let grandchild2 = new Node(5);

// 2. Cover the following code with types. Each class should implement an interface
class BurgerBuilder {
	constructor() {
		this.burger = {};
	}

	addPatty(type) {
		this.burger.patty = type;
		return this;
	}

	addCheese(type) {
		this.burger.cheese = type;
		return this;
	}

	addSauce(type) {
		this.burger.sauce = type;
		return this;
	}

	addToppings(toppings) {
		this.burger.toppings = toppings;
		return this;
	}

	build() {
		return new Burger(this.burger);
	}
}

class Burger {
	constructor(burger) {
		this.patty = burger.patty;
		this.cheese = burger.cheese;
		this.sauce = burger.sauce;
		this.toppings = burger.toppings;
	}

	describe() {
		let description = `Burger with ${this.patty} patty, `;
		if (this.cheese) {
			description += `${this.cheese} cheese, `;
		}
		if (this.sauce) {
			description += `${this.sauce} sauce, `;
		}
		if (this.toppings) {
			description += `${this.toppings.join(', ')} toppings`;
		}
		return description;
	}
}

let burger = new BurgerBuilder()
	.addPatty('beef')
	.addCheese('cheddar')
	.addSauce('ketchup')
	.addToppings(['lettuce', 'tomato'])
	.build();
console.log(burger.describe());

/* ******************************************************************************************************************************** */
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	introduce() {
		console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
	}

	celebrateBirthday() {
		this.age++;
		console.log(`Happy birthday, ${this.name}! You are now ${this.age} years old.`);
	}
}
/* ******************************************************************************************************************************** */
class BankAccount {
	constructor(owner, balance) {
		this.owner = owner;
		this.balance = balance;
	}

	deposit(amount) {
		this.balance += amount;
		console.log(`${amount} deposited. Current balance is ${this.balance}.`);
	}

	withdraw(amount) {
		if (amount > this.balance) {
			console.log(`Insufficient funds. Current balance is ${this.balance}.`);
		} else {
			this.balance -= amount;
			console.log(`${amount} withdrawn. Current balance is ${this.balance}.`);
		}
	}
}
/* ******************************************************************************************************************************** */
class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	get area() {
		return this.width * this.height;
	}

	get perimeter() {
		return 2 * (this.width + this.height);
	}
}
/* ******************************************************************************************************************************** */
class TodoList {
	constructor() {
		this.tasks = [];
	}

	addTask(task) {
		this.tasks.push(task);
		console.log(`Task "${task}" added. Total tasks: ${this.tasks.length}.`);
	}

	removeTask(task) {
		let index = this.tasks.indexOf(task);
		if (index === -1) {
			console.log(`Task "${task}" not found.`);
		} else {
			this.tasks.splice(index, 1);
			console.log(`Task "${task}" removed. Total tasks: ${this.tasks.length}.`);
		}
	}
}
/* ******************************************************************************************************************************** */
class BookCollection {
	constructor() {
		this.books = [];
	}

	async fetchData() {
		const response = await fetch('https://my-book-api.com/books');
		const data = await response.json();
		this.books = data.map(book => new Book(book.id, book.title, book.author, book.publishedYear));
	}

	logBooks() {
		console.log(this.books);
	}

	findBookById(id) {
		return this.books.find(book => book.id === id);
	}

	addBook(book) {
		this.books.push(book);
	}

	removeBookById(id) {
		this.books = this.books.filter(book => book.id !== id);
	}
}
```
