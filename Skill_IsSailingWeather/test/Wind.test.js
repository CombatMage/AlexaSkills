var expect = require('chai').expect;
var unit = require('../Wind');

describe('Wind', function() {
    describe('should convert wind speed from m/s to beauford', function() {
        it('should return 0 for speed < 0.3', function() {
            wind = new unit.Wind(0, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(0);
            wind = new unit.Wind(0.29, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(0);
            wind = new unit.Wind(-1, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(0);
        });
        it('should return 12 for speed >= 32.7', function() {
            wind = new unit.Wind(32.7, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(12);
            wind = new unit.Wind(100, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(12);
        });
    });
    describe('should convert wind degree to direction', function() {
        it('should return N for wind from 0 degree', function() { 
            wind = new unit.Wind(32.7, 0, undefined, undefined);
            expect(wind.windDirection).to.be.eql('N');
        });
        it('should return SW for wind from 230 degree', function() { 
            wind = new unit.Wind(32.7, 230, undefined, undefined);
            expect(wind.windDirection).to.be.eql('SW');
        });
    });
});