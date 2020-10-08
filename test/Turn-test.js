const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
  let card;
  let guess;
  let turn;
  beforeEach(function() {
     card = new Card(2, "Whats the color of the sky?", ["blue", "green", "yellow"], "blue");
     guess = 'blue';
     turn = new Turn(guess, card);
  })

  it('should be a class', function() { 
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', function() {
    expect(turn.guess).to.equal(guess)
  })

  it('should store a card', function() {
    expect(turn.card).to.equal(card)
  })

  it('should return a guess', function() {
    const returnedGuess = turn.returnGuess();

    expect(returnedGuess).to.equal(guess)
  })

  it('should return a guess', function() {
    const returnedCard = turn.returnCard();

    expect(returnedCard).to.equal(card)
  })

  it('should return true if the guess is correct', function() {
    const isCorrect = turn.evaluateGuess()

    expect(isCorrect).to.equal(true)
  })

  it('should return false if the guess is incorrect', function() {
    const badGuess = "red"
    const badTurn = new Turn(badGuess, card);

    const isCorrect = badTurn.evaluateGuess()

    expect(isCorrect).to.equal(false)
  })

  it('should give feedback based on correct guess', function() {
    const feedback = turn.giveFeedback()

    expect(feedback).to.equal('correct!')
  })

  it('should give feedback based on incorrect guess', function() {
    const badGuess = "red"
    const badTurn = new Turn(badGuess, card);

    const feedback = badTurn.giveFeedback()

    expect(feedback).to.equal('incorrect!')
  })
})














