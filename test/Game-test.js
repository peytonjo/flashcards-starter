// Your Game class should meet these other requirements:
  // Should keep track of the currentRound
  // start: method that starts everything
  // Creates Cards
  // Puts Cards in a Deck
  // Creates a new Round using the Deck
  // invokes printMessage to display the message in the CLI
  // invokes printQuestion to kick off our helper functions that allow interaction via the CLI

const { expect } = require("chai")
const Game = require("../src/Game");
const Round = require("../src/Round");

describe('Game', function() {
  let game;
  let round;

  beforeEach(function() {
    round = new Round()
    game = new Game();
  })
  it('should be a class', function() {
    expect(Game).to.be.a('function')
  })

  it('should have an instance of a class', function() {
    expect(game).to.be.an.instanceOf(Game)
  })
})