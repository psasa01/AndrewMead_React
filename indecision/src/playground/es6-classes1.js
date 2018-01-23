class Person {
    constructor(name = 'Anonimous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `${this.name} - Age ${this.age}. `
    }
    getGreeting() {
        return `Hi. I am ${this.name}. I am ${this.age} years old. `
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hasHomeLocation())
            greeting += `I am coming from ${this.homeLocation}`;

        return greeting;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `Their Major is ${this.major}`
        }
        return description;
    }
}

const me = new Traveler('Sallemao', 22, 'Sarajevo');

const other = new Traveler('Boki', 44);
console.log(me.getGreeting());
console.log(other.getGreeting());