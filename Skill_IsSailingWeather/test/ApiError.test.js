var expect = require('chai').expect;
var unit = require('../ApiError');

describe('Error', function() {
    describe('should parse error from json', function() {
        it('should detect error that no matching city found', function() {
            let error = new unit.ApiError('404');
            expect(error.isCityUnkown).to.be.eql(true);
        });
    });
});
