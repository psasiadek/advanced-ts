// 2. Cover the following code with types. Each class should implement an interface

interface IBurger {
	patty?: string;
	cheese?: string;
	sauce?: string;
	toppings?: string[];
	describe: () => string;
}

interface IBurgerBuilder {
	addPatty(type: string): this;
	addCheese(type: string): this;
	addSauce(type: string): this;
	addToppings(toppings: string[]): this;
	build(): IBurger;
}

class BurgerBuilder implements IBurgerBuilder {
	private burger: Partial<IBurger>;

	constructor() {
		this.burger = {};
	}

	addPatty(type: string) {
		this.burger.patty = type;
		return this;
	}

	addCheese(type: string) {
		this.burger.cheese = type;
		return this;
	}

	addSauce(type: string) {
		this.burger.sauce = type;
		return this;
	}

	addToppings(toppings: string[]) {
		this.burger.toppings = toppings;
		return this;
	}

	build() {
		return new Burger(this.burger);
	}
}

class Burger implements IBurger {
	patty?: string;
	cheese?: string;
	sauce?: string;
	toppings?: string[];

	constructor(burger: Partial<IBurger>) {
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

interface IPerson {
	introduce: () => void;
	celebrateBirthday: () => void;
}

class Person implements IPerson {
	private name: string;
	private age: number;

	constructor(name: string, age: number) {
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

interface IBankAccount {
	deposit: (amount: number) => void;
	withdraw: (amount: number) => void;
}

class BankAccount implements IBankAccount {
	private owner: string;
	private balance: number;

	constructor(owner: string, balance: number) {
		this.owner = owner;
		this.balance = balance;
	}

	deposit(amount: number) {
		this.balance += amount;
		console.log(`${amount} deposited. Current balance is ${this.balance}.`);
	}

	withdraw(amount: number) {
		if (amount > this.balance) {
			console.log(`Insufficient funds. Current balance is ${this.balance}.`);
		} else {
			this.balance -= amount;
			console.log(`${amount} withdrawn. Current balance is ${this.balance}.`);
		}
	}
}
/* ******************************************************************************************************************************** */

interface IRectangle {
	area: number;
	perimeter: number;
}

class Rectangle implements IRectangle {
	private width: number;
	private height: number;

	constructor(width: number, height: number) {
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

interface ITodoList {
	addTask: (task: string) => void;
	removeTask: (task: string) => void;
}

class TodoList implements ITodoList {
	private tasks: string[];

	constructor() {
		this.tasks = [];
	}

	addTask(task: string) {
		this.tasks.push(task);
		console.log(`Task "${task}" added. Total tasks: ${this.tasks.length}.`);
	}

	removeTask(task: string) {
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

interface IBook {
	id: string;
	title: string;
	author: string;
	publishedYear: number;
}

class Book {
	constructor(public id: string, private title: string, private author: string, private publishedYear: number) {}
}

interface IBookCollection {
	fetchData: () => Promise<void>;
	logBooks: () => void;
	findBookById: (id: string) => Book | undefined;
	addBook: (book: Book) => void;
	removeBookById: (id: string) => void;
}

class BookCollection implements IBookCollection {
	private books: Book[];

	constructor() {
		this.books = [];
	}

	async fetchData() {
		const response = await fetch('https://my-book-api.com/books');
		const data: IBook[] = await response.json();
		this.books = data.map(book => new Book(book.id, book.title, book.author, book.publishedYear));
	}

	logBooks() {
		console.log(this.books);
	}

	findBookById(id: string) {
		return this.books.find(book => book.id === id);
	}

	addBook(book: Book) {
		this.books.push(book);
	}

	removeBookById(id: string) {
		this.books = this.books.filter(book => book.id !== id);
	}
}
