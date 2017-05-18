var expect = require('chai').expect;
var unit = require('../Wind')

describe('Wind', function() {
    describe('should convert wind speed from m/s to beauford', function() {
        it('it should return 0 for speed < 0.3', function() {
            wind = new unit.Wind(0, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(0);
            wind = new unit.Wind(0.29, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(0);
            wind = new unit.Wind(-1, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(0);
        });
        it('it should return 12 for speed >= 32.7', function() {
            wind = new unit.Wind(32.7, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(12);
            wind = new unit.Wind(100, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(12);
        });
    });
});