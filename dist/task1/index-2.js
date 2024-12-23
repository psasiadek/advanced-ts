// 2. Cover the following code with types. Each class should implement an interface
class BurgerBuilder {
    burger;
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
    patty;
    cheese;
    sauce;
    toppings;
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
class Person {
    name;
    age;
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
class BankAccount {
    owner;
    balance;
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
        }
        else {
            this.balance -= amount;
            console.log(`${amount} withdrawn. Current balance is ${this.balance}.`);
        }
    }
}
class Rectangle {
    width;
    height;
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
class TodoList {
    tasks;
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
        }
        else {
            this.tasks.splice(index, 1);
            console.log(`Task "${task}" removed. Total tasks: ${this.tasks.length}.`);
        }
    }
}
class Book {
    id;
    title;
    author;
    publishedYear;
    constructor(id, title, author, publishedYear) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }
}
class BookCollection {
    books;
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
export {};
