---
title: OOP in JavaScript
excerpt: OOP is a programming paradigm that focuses on designing software based on real-world objects, encapsulating properties and behaviors.
image: oop.jpg
isFeatured: true
date: '2023-03-20'
---


JavaScript is a versatile programming language that supports various programming paradigms, including Object-Oriented Programming (OOP). OOP is a programming paradigm that focuses on designing software based on real-world objects, encapsulating properties and behaviors. In this short article, we will explore OOP in JavaScript.

## Classes and Objects

JavaScript introduced classes in ES6, making it possible to define classes as templates for creating objects. A class defines the properties and methods that an object will have. An object is an instance of a class and can be created using the "new" keyword.

```js
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  honk() {
    console.log("Beep beep!");
  }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.brand); // Output: Toyota
myCar.honk(); // Output: Beep beep!
```

## Inheritance

JavaScript supports inheritance, allowing a subclass to inherit properties and methods from a superclass. A subclass can add its own properties and methods, and override the ones inherited from the superclass.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let myDog = new Dog("Rufus");
myDog.speak(); // Output: Rufus barks.
```

## Encapsulation and Abstraction

JavaScript provides ways to encapsulate properties and methods, making them private or protected. Encapsulation helps to prevent external access to an object's internal state and behavior. Abstraction helps to hide the complexity of an object's implementation, exposing only the necessary interfaces.

```js
class BankAccount {
  #balance = 0; // Private property

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  get balance() { // Getter method
    return this.#balance;
  }
}

let myAccount = new BankAccount();
myAccount.deposit(1000);
console.log(myAccount.balance); // Output: 1000
myAccount.withdraw(500);
console.log(myAccount.balance); // Output: 500
```

In conclusion, OOP in JavaScript provides a powerful way to design software based on real-world objects, encapsulating properties and behaviors. With classes, inheritance, encapsulation, and abstraction, JavaScript developers can create efficient and maintainable code.

---

*Author: Marcin Suski*  
*date: 2023-03-20*
