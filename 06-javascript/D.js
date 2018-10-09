class Monster {
    constructor(name) {
        this._health = 100;
        this.name = name;
    }
    wounded(damage) {
        if (this._health >= 0) {
        this._health -= damage;
        } else {
        }
    } 
    hero() {
        if (this._health >= 0) {
        let ramdomDamage = Math.floor(Math.random() * (20 - 5 + 1) + 5);
        console.log(`!! You recevied ${ramdomDamage} damage. !!`);
        return this.wounded(ramdomDamage);
        } else {

        }
    }
    get Health() {
        if (this._health >= 0) {
            return `You still have ${this._health} health.`
            } else {
            } return `You fucking dead.`
    }
}


const monster1 = new Monster('Pee');

console.log(monster1.Health);
monster1.hero();
console.log(monster1.Health);
monster1.hero();
console.log(monster1.Health);
monster1.hero();
console.log(monster1.Health);
monster1.hero();
console.log(monster1.Health);
monster1.hero();
console.log(monster1.Health);
monster1.hero();
console.log(monster1.Health);
monster1.hero();
console.log(monster1.Health);
monster1.hero();
console.log(monster1.Health);
monster1.hero();
console.log(monster1.Health);
monster1.hero();
console.log(monster1.Health);
monster1.hero();
console.log(monster1.Health);