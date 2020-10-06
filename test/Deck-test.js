const { expect } = require("chai")
const Deck = require("../src/Deck")

describe('Deck', function() {
    it('should be a class', function() {
        const deck = new Deck()
        expect(Deck).to.be.a('function')
    })

    it('should be an instance of Deck', function() {
        const deck = new Deck()
        expect(deck).to.be.an.instanceof(Deck);
    })
})