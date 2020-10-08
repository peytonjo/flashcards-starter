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
    const cards = game.createCards(data.prototypeData)

    expect(cards).to.be.an('array')
    expect(cards[0]).to.be.an.instanceOf(Card)
    expect(cards[0].id).to.equal(data.prototypeData[0].id)
    expect(cards[0].question).to.equal(data.prototypeData[0].question)
    expect(cards[0].answers).to.equal(data.prototypeData[0].answers)
    expect(cards[0].correctAnswer).to.equal(data.prototypeData[0].correctAnswer)
  })

  it('should create a deck', function() {
    const cards = game.createCards(data.prototypeData)
    const deck = game.createDeck(cards)

    expect(deck).to.be.an.instanceOf(Deck)
    expect(deck.cards[0]).to.be.an.instanceOf(Card)
  })

  it('should create a round', function() {
    const cards = game.createCards(data.prototypeData)
    const deck = game.createDeck(cards)
    const round = game.createRound(deck)

    expect(round).to.be.an.instanceOf(Round)
  })

  it('should start the game', function() {
    expect(game.currentRound).to.not.be.an.instanceOf(Round)

    game.start()

    expect(game.currentRound).to.be.an.instanceOf(Round)
  })
})