const { expect } = require("chai");
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");

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

  it('should increment through the cards each turn', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const cards = [card1, card2, card3]
    const deck = new Deck(cards)
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(card1)

    round.takeTurn('pug')

    expect(round.returnCurrentCard()).to.equal(card2)

    round.takeTurn('spleen')

    expect(round.returnCurrentCard()).to.equal(card3)
  })
  
  it('should calculate and return the percentage of correct guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const card4 = new Card(18, 'Question', ['Wrong', 'Right'], 'Right');
    const cards = [card1, card2, card3, card4]
    const deck = new Deck(cards)
    const round = new Round(deck);

    round.takeTurn('pug')
    round.takeTurn('gallbladder')
    round.takeTurn('Fitzgerald')
    round.takeTurn('Wrong')

    const percent = round.calculatePercentCorrect()
    expect(percent).to.equal(50)
    
  })
})