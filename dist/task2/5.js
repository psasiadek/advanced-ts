"use strict";
// // 5. Create a decorator '@log' that would print given message:
// class MyClass {
// 	@log
// 	myMethod(arg1, arg2) {
// 		return arg1 + arg2;
// 	}
// }
// const myObj = new MyClass();
// myObj.myMethod(2, 3);
// // Result:
// // Calling myMethod with arguments: [2, 3]
// // Result: 5
var say = 'a bird in hand > two in the bush';
var html = htmlEscape `<div> I would just like to say : ${say}</div>`;
// a sample tag function
function htmlEscape(literals, ...placeholders) {
    let result = '';
    console.log(literals, placeholders);
    // interleave the literals with the placeholders
    for (let i = 0; i < placeholders.length; i++) {
        result += literals[i];
        result += placeholders[i]
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    // add the last literal
    result += literals[literals.length - 1];
    return result;
}
console.log(html);
