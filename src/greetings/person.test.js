//const Person = require('./person')
import Person from './person'

test("The name is null", () => {
    expect(Person.greet(null)).toBe("Hello my friend.");
});

test("greet Bob to equal Hello, Bob.", () => {
    expect(Person.greet("Bob")).toBe("Hello, Bob.");
});

test("greet BOD to equal HELLO BOB", () => {
    expect(Person.greet("BOB")).toBe("HELLO, BOB.");
});

test("greet Jill and Jhon", () => {
    expect(Person.greet("Jill", "Jhon")).toBe("Hello, Jill and Jhon.")
});

test("greet Jill, Jhon, Bob", () => {
    expect(Person.greet('Jill', 'Jhon', 'Bob')).toBe("Hello, Jill, Jhon and Bob.")
});

test("greet Jill, Jhon, BOB", () => {
    expect(Person.greet('Jill', 'Jhon', 'BOB')).toBe("Hello, Jill and Jhon. AND HELLO BOB !")
});
