// Problem-1-------------
const filterEvenNumbers = (arr: number[]): number[] => {
    return arr.filter(number => number % 2 == 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))


// Problem-2-------------

const reverseString = (str: string): string => {
    return str.split('').reverse().join('');
}

console.log(reverseString("typescript"))

// Problem-3----------------

const checkType = (input: string | number): string => {
    if (typeof input === 'string') return "String"
    else return "Number"
}

console.log(checkType("Hello"))
console.log(checkType(42))


// Problem-4----------------

const getProperty = (obj: any, key: string) => {
    return obj[key]
}

const user = {
    id: 1,
    name: "John Doe",
    age: 21
}

console.log(getProperty(user, 'name'))
console.log(getProperty(user, 'id'))
console.log(getProperty(user, 'age'))

// Problem-5---------------

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book) {
    return {
        ...book,
        isRead: true,
    };
}

const myBook = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024
};

const updatedBook = toggleReadStatus(myBook);

console.log(updatedBook);



// Problem-6--------------
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age)
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}

const student1 = new Student('Alice', 20, 'A');

console.log(student1.getDetails());

// Problem-7-------------------------

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
    return arr1.filter(number => arr2.includes(number));
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
console.log(getIntersection(arr1, arr2))