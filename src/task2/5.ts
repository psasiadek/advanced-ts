// 5. Create a decorator '@log' that would print given message:
// Result:
// Calling myMethod with arguments: [2, 3]
// Result: 5

function log(target: Object, propertyName: string | symbol, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;

	descriptor.value = function (...args: any[]) {
		const result = originalMethod.apply(this, args);

		console.log(`Result:\nCalling ${String(propertyName)} with arguments:`, args, `\nResult:`, result);

		return result;
	};

	return descriptor;
}

class MyClass {
	@log
	myMethod(arg1: number, arg2: number) {
		return arg1 + arg2;
	}
}

const myObj = new MyClass();
myObj.myMethod(2, 3);
