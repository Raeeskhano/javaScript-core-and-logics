# js and classes

- classes were used in js in ES5 and latter.

## OOP

- paradigm of javascript.

## object

- collection of properties and methods
- toLowerCase

## why use OOP

- to resolve code spagathe code.

## parts of OOP

- object literal
- constructor functions
- prototypes
- classes
- instances (new, this)

## 4 pillars

# Abstraction

Abstraction means hiding complex implementation details and showing only the essential functionality.
eg: When driving a car, you don't need to know how the engine works internally.

class Car {
start() {
this.#injectFuel();
this.#startEngine();
console.log("Car started");
}

#injectFuel() {
console.log("Fuel injected");
}

#startEngine() {
console.log("Engine started");
}
}

const car = new Car();
car.start();

# Encapsulation

Encapsulation means bundling data and methods together and restricting direct access to internal details.

eg:
class BankAccount {
#balance; // Private property

constructor(initialBalance) {
this.#balance = initialBalance;
}

deposit(amount) {
this.#balance += amount;
}

withdraw(amount) {
if (amount <= this.#balance) {
this.#balance -= amount;
} else {
console.log("Insufficient funds");
}
}

getBalance() {
return this.#balance;
}
}

const account = new BankAccount(1000);

account.deposit(500);
account.withdraw(300);

console.log(account.getBalance()); // 1200

// console.log(account.#balance); ❌ Error

# inheritance

Inheritance allows one class to reuse properties and methods from another class.

eg:

## parent class

class Dog extends Animal {
bark() {
console.log(`${this.name} says Woof!`);
}
}

const dog = new Dog("Tommy");

dog.eat();
dog.bark();

## child class

class Dog extends Animal {
bark() {
console.log(`${this.name} says Woof!`);
}
}

const dog = new Dog("Tommy");

dog.eat();
dog.bark();

## Another child

class Cat extends Animal {
meow() {
console.log(`${this.name} says Meow!`);
}
}

const cat = new Cat("Kitty");

cat.eat();
cat.meow();

# polymorphism

Polymorphism means "many forms". Different objects can respond to the same method in different ways.

eg:

class Animal {
makeSound() {
console.log("Some sound");
}
}

class Dog extends Animal {
makeSound() {
console.log("Woof!");
}
}

class Cat extends Animal {
makeSound() {
console.log("Meow!");
}
}

class Cow extends Animal {
makeSound() {
console.log("Moo!");
}
}

const animals = [
new Dog(),
new Cat(),
new Cow()
];

animals.forEach(animal => animal.makeSound());
