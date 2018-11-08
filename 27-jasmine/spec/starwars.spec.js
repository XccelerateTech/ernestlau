const Jedi = require('../starwars').Jedi
const Sith = require('../starwars').Sith
const duel = require('../starwars').duel

beforeEach(function(){
    obiwan = new Jedi("Obiwan Kenobi",70,700);
    anakin = new Sith("Anakin Skywalker",100,1000);
});

describe('Checking if they attack each other', function(){

    beforeEach(function() {
      jasmine.clock().install();
    });
  
    afterEach(function() {
      jasmine.clock().uninstall();
    });

    
    it('check attack times', function(){
        spyOn(obiwan, 'attack').and.returnValue(true);
        spyOn(anakin, 'attack');
        expect(anakin.attack).not.toHaveBeenCalled();
        expect(obiwan.attack).not.toHaveBeenCalled();
        duel(obiwan,anakin);
        expect(anakin.attack).toHaveBeenCalled();
        expect(obiwan.attack).toHaveBeenCalled();
    })

    it('check Anakin was back to normal health after the rescue.', function(){
        spyOn(anakin, 'dead');
        expect(anakin.health).toEqual(1000)
        duel(obiwan,anakin);
        expect(anakin.health).toBeLessThan(800);
        expect(anakin.dead).not.toHaveBeenCalledWith(true);
        jasmine.clock().tick(6000);
        expect(anakin.health).toEqual(800)
    })

})

