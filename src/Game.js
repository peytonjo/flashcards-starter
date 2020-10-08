const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

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
    const cards = data.prototypeData.map(function(cardData) {
      const card = new Card(
        cardData.id, 
        cardData.question, 
        cardData.answers, 
        cardData.correctAnswers
      )

      return card;
    })

    return cards;
  }

  printMessage(message){
    return message 
  }

  printQuestion(question){
    return question 
  }



}

module.exports = Game;