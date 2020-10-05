// returnGuess: method that returns the guess
// returnCard: method that returns the Card
// evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card
// giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.

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

})














