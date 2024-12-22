"use strict";
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
        }
        else {
            letterCount[letter] = 1;
        }
    }
    return letterCount;
}
const str = getLetterCount('hello');
const myNumber = 42;
const myString = 'Hello, TypeScript!';
const myBoolean = true;
const myArray = [1, 2, 3, 4, 5];
const myObject = { name: 'John Doe', age: 30 };
// in this case could also be of type number | string | Record<string, string | number>
let myAny = 42;
myAny = 'Hello, TypeScript!';
myAny = { name: 'Jane Doe', age: 25 };
const linearSearch = function (array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
};
const binarySearch = function (array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return mid;
        }
        else if (array[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
};
class Node2 {
    value;
    children;
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
        if (!node)
            continue;
        if (node.value === target) {
            return node;
        }
        for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
        }
    }
    return null;
}
let root = new Node2(1);
let child1 = new Node2(2);
let child2 = new Node2(3);
let grandchild1 = new Node2(4);
let grandchild2 = new Node2(5);
