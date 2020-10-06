const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
  it('should be a class', function() { 
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', function() {
    const guess = "banana"
    const card = new Card();
    const turn = new Turn(guess, card);

    expect(turn.guess).to.equal(guess)
  })

  it('should store a card', function() {
    const guess = "banana"
    const card = new Card();
    const turn = new Turn(guess, card);

    expect(turn.card).to.equal(card)
  })

  it('should return a guess', function() {
    const guess = "banana"
    const card = new Card();
    const turn = new Turn(guess, card);

    const returnedGuess = turn.returnGuess();

    expect(returnedGuess).to.equal(guess)
  })

  it('should return a guess', function() {
    const guess = "banana"
    const card = new Card();
    const turn = new Turn(guess, card);

    const returnedCard = turn.returnCard();

    expect(returnedCard).to.equal(card)
  })

  it('should return true if the guess is correct', function() {
    const guess = "blue"
    const card = new Card(2, "Whats the color of the sky?", ["blue", "green", "yellow"], "blue");
    const turn = new Turn(guess, card);

    const isCorrect = turn.evaluateGuess()

    expect(isCorrect).to.equal(true)
  })

  it('should return false if the guess is incorrect', function() {
    const guess = "red"
    const card = new Card(2, "Whats the color of the sky?", ["blue", "green", "yellow"], "blue");
    const turn = new Turn(guess, card);

    const isCorrect = turn.evaluateGuess()

    expect(isCorrect).to.equal(false)
  })

  it('should give feedback based on correct guess', function() {
    const guess = "blue"
    const card = new Card(2, "Whats the color of the sky?", ["blue", "green", "yellow"], "blue");
    const turn = new Turn(guess, card);

    const feedback = turn.giveFeedback()

    expect(feedback).to.equal('correct!')
  })

  it('should give feedback based on incorrect guess', function() {
    const guess = "red"
    const card = new Card(2, "Whats the color of the sky?", ["blue", "green", "yellow"], "blue");
    const turn = new Turn(guess, card);

    const feedback = turn.giveFeedback()

    expect(feedback).to.equal('incorrect!')
  })
})














