var expect = require('chai').expect;
var apiModule = require('../ApiModule')

describe('OpenWeatherApi', function() {
    describe('get forecast', function() {
        it('returns the current current forecast as json', function() {
            apiModule.getCurrentForecast(
                'Berlin,de',
                (result) => {
                    expect(result).to.be.json
                },
                (error) => {
                    assert.fail('error: ' + error);
                });
        });
    });
});
