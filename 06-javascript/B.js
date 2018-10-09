function Player(name) {
    this.name = name;
    this.health = 100;
    this.counter = 0;
    this.attack = function attack(opponent) {
        opponent.health -= 10;
    };
    randomAttack = function randomAttack() {
        ranNo = Math.floor(Math.random() * Math.floor(2));
    if (tommy.health === 0) {
        console.log ('Game End, Peter won');
    } else if(peter.health === 0) {
        console.log ('Game End, Tommy won');
    } else {
        if (ranNo === 1) {
            peter.counter = peter.counter + 1 ;
            tommy.counter = 0;
            peter.attack(tommy);
            console.log(`Peter attacked Tommy and Tommy remain ${tommy.health} health!`)
            if (peter.counter === 3 && peter.health != 100){
                peter.healing();
                peter.counter = 0;
                console.log(`*** Peter attack 3 times consecutively and Peter got 5 health!`);
            } else {

            }
        } else {
            tommy.counter = tommy.counter + 1 ;
            peter.counter = 0;
            tommy.attack(peter)
            console.log(`Tommy attacked Peter and Peter remain ${peter.health} health!`)
            if (tommy.counter === 3 && tommy.health != 100){
                tommy.healing();
                tommy.counter = 0
                console.log(`*** Tommy attack 3 times consecutively and got 5 health!`);
            } else {

            }
        }
    }
    }
}
Player.prototype.healing = function() {
    this.health += 5;
};

var peter = new Player('Peter');
var tommy = new Player('Tommy');
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();
randomAttack();