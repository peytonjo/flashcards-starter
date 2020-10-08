const util = require('./util');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  createCards(data) {
    const cards = data.map(function(cardData) {
      const card = new Card(
        cardData.id, 
        cardData.question, 
        cardData.answers, 
        cardData.correctAnswer
      )

      return card;
    })

    return cards;
  }

  createDeck(cards) {
    const deck = new Deck(cards)

    return deck;
  }

  createRound(deck) {
    const round = new Round(deck)

    return round;
  }

  start() {
    const cards = this.createCards(prototypeQuestions)
    const deck = this.createDeck(cards)
    const round = this.createRound(deck)
    
    this.currentRound = round

    this.printMessage(deck, round)
    this.printQuestion(round)
  }
}

module.exports = Game;