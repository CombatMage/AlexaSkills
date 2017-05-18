var expect = require('chai').expect;
var unit = require('../IntentModule');

describe('IntentModule', function() {
    describe('handleIntentIsSailingWeather', function() {
        it('should return non empty string', function() {
            unit.handleIntentIsSailingWeather(
                'Berlin,de', 
                (result) => {
                    expect(result).to.be.string;
                    expect(result).to.contain('Die aktuelle Windstärke');
            })
        });
    });
});
