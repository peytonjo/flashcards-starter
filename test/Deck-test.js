const { expect } = require("chai")
const Card = require("../src/Card")
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

    it('should take in an array of cards', function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        const cards = [card1, card2, card3]
        const deck = new Deck(cards)

        expect(deck.cards).to.equal(cards)
    })

    it('should return a count of the cards', function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        const cards = [card1, card2, card3]
        const deck = new Deck(cards)

        const count = deck.countCards()

        expect(count).to.equal(3)
    })
})