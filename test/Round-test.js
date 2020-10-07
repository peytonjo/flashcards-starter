const { expect } = require("chai");
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");


// Your Round class should meet the following requirements:
// returnCurrentCard: method that returns the current card being played
// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

// When a guess is made, a new Turn instance is created.
// The turns count is updated, regardless of whether the guess is correct or incorrect
// The next card becomes current card
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct
// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!`

describe('Round', function () {
  it('should be a class', function () {
    const round = new Round();
    expect(Round).to.be.a('function')
  })

  it('should be an instance of the class Round', function () {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  })

  it('should return current card', function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const cards = [card1, card2, card3]
    const deck = new Deck(cards)
    const round = new Round(deck);

    const currentCard = round.returnCurrentCard()

    expect(currentCard).to.equal(card1)
  })
  // takeTurn: method that updates turns count, evaluates guesses, 
  // gives feedback, and stores card id of incorrect guesses

  // round.turns 0
  // round.incorrectGuesses []
  // round.takeTurn(guess)
  // updateTurnCount
  // guess id?
  it('should update turn count', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const cards = [card1, card2, card3]
    const deck = new Deck(cards)
    const round = new Round(deck);

    expect(round.turns).to.equal(0)

    round.takeTurn('guess')

    expect(round.turns).to.equal(1)
  })

  it('should store the id of incorrect guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const cards = [card1, card2, card3]
    const deck = new Deck(cards)
    const round = new Round(deck);

    expect(round.incorrectGuesses.length).to.equal(0)

    round.takeTurn('pug')

    expect(round.incorrectGuesses.length).to.equal(1)
    expect(round.incorrectGuesses[0]).to.equal(card1.id)
  })

  it('should not store the id of correct guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const cards = [card1, card2, card3]
    const deck = new Deck(cards)
    const round = new Round(deck);

    expect(round.incorrectGuesses.length).to.equal(0)

    round.takeTurn('sea otter')

    expect(round.incorrectGuesses.length).to.equal(0)
  })

  it('should return feedback on if the guess is correct or not', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const cards = [card1, card2, card3]
    const deck = new Deck(cards)
    const round = new Round(deck);

    expect(round.incorrectGuesses.length).to.equal(0)

    const feedback = round.takeTurn('sea otter')

    expect(feedback).to.equal('correct!')
  })
})