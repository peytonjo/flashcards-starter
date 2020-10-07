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

describe('Game', function() {
  let card1;
  let card2;
  let card3;
  let card4;
  let cards;
  let deck;
  let round;
  let game;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    card4 = new Card(18, 'Question', ['Wrong', 'Right'], 'Right');
    cards = [card1, card2, card3, card4]
    deck = new Deck(cards)
    round = new Round(deck);
    game = new Game(round);
  })
  it('should be a class', function() {
    expect(Game).to.be.a('function')
  })

  it('should have an instance of a class', function() {
    expect(game).to.be.an.instanceOf(Game)
  })

  it('should keep track of the currentRound', function() {
    expect(game.currentRound).to.equal(round)
  })
})