// Your Game class should meet these other requirements:
  // Should keep track of the currentRound
  // start: method that starts everything
  // Creates Cards
  // Puts Cards in a Deck
  // Creates a new Round using the Deck
  // invokes printMessage to display the message in the CLI
  // invokes printQuestion to kick off our helper functions that allow interaction via the CLI

const { expect } = require("chai");
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Game = require("../src/Game");
const Round = require("../src/Round");
const data = require("../src/data")
describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  })
  it('should be a class', function() {
    expect(Game).to.be.a('function')
  })

  it('should have an instance of a class', function() {
    expect(game).to.be.an.instanceOf(Game)
  })

  it('should create cards from data', function() {
    const cards = game.createCards(data)

    expect(cards).to.be.an('array')
    expect(cards[0]).to.be.an.instanceOf(Card)
  })

  it('should create a deck', function() {
    const cards = game.createCards(data)

    const deck = game.createDeck(cards)

    expect(deck).to.be.an.instanceOf(Deck)
    expect(deck.cards[0]).to.be.an.instanceOf(Card)
  })

  // it('should keep track of the currentRound', function() {
  //   expect(game.currentRound).to.equal()
  // })


})