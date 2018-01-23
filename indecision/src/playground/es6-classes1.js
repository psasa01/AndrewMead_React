class Person  {
    constructor (name = 'Anonimous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `${this.name} - Age ${this.age}. `
    }
    getGreeting() {
        return `Hi. I am ${this.name}. I am ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age) ;
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += `Their Major is ${this.major}`
        }
        return description;
    }
}

const me = new Student('Sallemao', 22, 'Majstor!');

const other = new Student('Boki', 44);
console.log(me.getDescription());
console.log(other.getDescription());