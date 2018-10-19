class Pet {
    constructor({age,name}) {
        this.age = age;
        this.name = name;
    }
    get Age() {
        return `I’m ${this.age} year’s old.`
    }
    set Age(n) {
        this.age = n;
    }
    info () {
        return `My name is ${this.name} and I'm ${this.age} year's old.`;
    }
}

const pet = new Pet({age: 44, name: 'Tom'});
console.log(pet.Age);
pet.Age = 14;
console.log(pet.Age);
console.log(pet.info());