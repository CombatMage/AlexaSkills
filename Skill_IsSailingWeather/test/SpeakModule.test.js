var expect = require('chai').expect;
var unit = require('../LanguageModule')

describe('Helper for language ouput', function() {
    describe('get simple positive response', function() {
        it('should return a positive response for alexa, containing the given wind information', function() {
            response = unit.getPositiveResponseForWindSpeed(6);
            expect(response).to.be.string;
            expect(response).to.contain("6");
        });
    });
});
