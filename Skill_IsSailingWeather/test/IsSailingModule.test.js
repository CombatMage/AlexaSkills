var expect = require('chai').expect;
var unit = require('../IsSailingModule')
var model = require('../Wind')

describe('getWindFromForecast', function() {
    describe('returns wind information from forecast for given time', function() {
        it('should return the first entry for the present time', function() {
            forecast = [
                new model.Wind(undefined, undefined, undefined, undefined),
                new model.Wind(undefined, undefined, undefined, undefined)]

            result = unit.getWindFromForecast(forecast, Date.now());
            expect(result).to.be.eql(forecast[0]);
        });
    });
});