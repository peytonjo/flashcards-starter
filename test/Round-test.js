const { expect } = require("chai");
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");

describe('Round', function () {
  let card1;
  let card2;
  let card3;
  let card4;
  let cards;
  let deck;
  let round;
  

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    card4 = new Card(18, 'Question', ['Wrong', 'Right'], 'Right');
    cards = [card1, card2, card3, card4]
    deck = new Deck(cards)
    round = new Round(deck);
  })
  
  it('should be a class', function () {
    expect(Round).to.be.a('function')
  })

  it('should be an instance of the class Round', function () {
    expect(round).to.be.an.instanceof(Round);
  })

  it('should return current card', function () {
    const currentCard = round.returnCurrentCard()

    expect(currentCard).to.equal(card1)
  })

  it('should update turn count', function() {
    expect(round.turns).to.equal(0)

    round.takeTurn('guess')

    expect(round.turns).to.equal(1)
  })

  it('should store the id of incorrect guesses', function() {
    expect(round.incorrectGuesses.length).to.equal(0)

    round.takeTurn('pug')

    expect(round.incorrectGuesses.length).to.equal(1)
    expect(round.incorrectGuesses[0]).to.equal(card1.id)
  })

  it('should not store the id of correct guesses', function() {
    expect(round.incorrectGuesses.length).to.equal(0)

    round.takeTurn('sea otter')

    expect(round.incorrectGuesses.length).to.equal(0)
  })

  it('should return feedback on if the guess is correct or not', function() {
    expect(round.incorrectGuesses.length).to.equal(0)

    const feedback = round.takeTurn('sea otter')

    expect(feedback).to.equal('correct!')
  })

  it('should increment through the cards each turn', function() {
    expect(round.returnCurrentCard()).to.equal(card1)

    round.takeTurn('pug')

    expect(round.returnCurrentCard()).to.equal(card2)

    round.takeTurn('spleen')

    expect(round.returnCurrentCard()).to.equal(card3)
  })
  
  it('should calculate and return the percentage of correct guesses', function() {
    round.takeTurn('pug')
    round.takeTurn('gallbladder')
    round.takeTurn('Fitzgerald')
    round.takeTurn('Wrong')

    const percent = round.calculatePercentCorrect()
    expect(percent).to.equal(50)
  })
})