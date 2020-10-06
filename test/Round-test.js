const { expect } = require("chai");
const Round = require("../src/Round");

describe('Round', function() {
    it('should be a class', function() {
        const round = new Round();
        expect(Round).to.be.a('function')
    })

    it('should be an instance of the class Round', function() {
        const round = new Round();
        expect(round).to.be.an.instanceof(Round);
    })
})