class Flyanimal {
    constructor() {
        this.can_fly = `${this.constructor.name} can fly.`;
    }
}


class Swimanimal {
    constructor() {
        this.can_swim = `${this.constructor.name} can swim.`;
    }
}


class Bat extends Flyanimal{
    constructor() {
        super();
        this.can_feed = `${this.constructor.name} can feed.`;
    }
}

class Fish extends Swimanimal {
    constructor() {
        super();
        this.can_lay = `${this.constructor.name} can lay.`;
    }
}

class Whale extends Swimanimal {
    constructor() {
        super();
        this.can_feed = `${this.constructor.name} can feed.`;
    }
}

class Bird extends Flyanimal {
    constructor() {
        super();
        this.can_lay = `${this.constructor.name} can lay`;
    }
}

const bird = new Bird();
const bat = new Bat();
const whale = new Whale();
const fish = new Fish();
console.log(bird.can_fly);
console.log(bird.can_lay);
console.log(bat.can_fly);
console.log(bat.can_feed);
console.log(whale.can_swim);
console.log(whale.can_feed);
console.log(fish.can_swim);
console.log(fish.can_lay);

