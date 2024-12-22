// 7. Apply typescript utility types to the given type:
/*
    -Create a new type from the given one
        -where all the properties are optional
        -where all the properties are required
        -where all the properties are readonly
        -with only properties specified: name, age, isStudent, hobbies
        -with the specified properties omited: job, phoneNumbers, birthday
        -union type where values are given type's keys
    -
  */
type MyType = {
	name: string;
	age: number;
	isStudent: boolean;
	hobbies: string[];
	address: {
		street: string;
		city: string;
		country: string;
	};
	email?: string;
	job?: {
		title: string;
		company: string;
		salary: number;
	};
	phoneNumbers: Map<string, string>;
	birthday: Date;
};

type OptionalType = Partial<MyType>;

type RequiredType = Required<MyType>;

type ReadonlyType = Readonly<MyType>;

type PickedType = Pick<MyType, 'name' | 'age' | 'isStudent' | 'hobbies'>;

type OmittedType = Omit<MyType, 'job' | 'phoneNumbers' | 'birthday'>;

type UnionType<T> = keyof T;

type MyUnionType = UnionType<MyType>;
