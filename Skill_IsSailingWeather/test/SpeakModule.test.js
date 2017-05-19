var expect = require('chai').expect;
var unit = require('../SpeakModule')

describe('Helper for language ouput', function() {
    describe('getPositiveResponseForWindSpeed', function() {
        it('should return a positive response for alexa, containing the given wind information', function() {
            response = unit.getPositiveResponseForWindSpeed(6,'Erkner');
            expect(response).to.be.string;
            expect(response).to.contain('6');
            expect(response).to.contain('Erkner');
            expect(response).to.contain(unit.TELL_RESULT);
        });
    });

    describe('getLaunchMessage', function() {
        it('should return the launch message, informing the user of possible actions', function() {
            response = unit.getLaunchMessage();
            expect(response).to.be.string;
            expect(response).to.contain(unit.TELL_INTRO);
        });
    });

    describe('getRequestForLocation', function() {
        it('should ask the user for his desired location', function() {
            response = unit.getRequestForLocation();
            expect(response).to.be.string;
            expect(response).to.contain(unit.ASK_LOCATION);
        });
    });
});
