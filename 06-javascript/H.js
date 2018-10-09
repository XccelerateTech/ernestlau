class Bat {
    constructor() {
        this.animalName = 'Bat';
    }
    can_feed() {
        return `${this.animalName} can feed.`;
    }
    can_fly() {
        return `${this.animalName} can fly.`;
    }
}

class Fish {
    constructor() {
        this.animalName = 'Fish';
    }
    can_lay() {
        return `${this.animalName} can lay.`;
    }
    can_swim() {
        return `${this.animalName} can swim.`;
    }
}

class Whale {
    constructor() {
        this.animalName = 'Whale';
    }
    can_swim() {
        this.animal = new Fish();
        this.animal.animalName = this.animalName;
        return this.animal.can_swim();
    }
    can_feed() {
        this.animal = new Bat();
        this.animal.animalName = this.animalName;
        return this.animal.can_feed();
    }
}

class Bird {
    constructor() {
        this.animalName = 'Bird';
    }
    can_fly() {
        this.animal = new Bat();
        this.animal.animalName = this.animalName;
        return this.animal.can_fly();
    }
    can_lay() {
        this.animal = new Fish();
        this.animal.animalName = this.animalName;
        return this.animal.can_lay();
    }
}

const bat = new Bat();
const fish = new Fish();
const whale = new Whale();
const bird = new Bird();

console.log(bat.can_fly());
console.log(bat.can_feed());
console.log(fish.can_swim());
console.log(fish.can_lay());
console.log(whale.can_swim());
console.log(whale.can_feed());
console.log(bird.can_fly());
console.log(bird.can_lay());


