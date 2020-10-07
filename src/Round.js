const Turn = require("../src/Turn");

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.deck.cards[0]
  }

  takeTurn(guess) {
    this.turns = this.turns + 1
  
    const currentCard = this.returnCurrentCard()
    const turn = new Turn(guess, currentCard)

    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard.id)
    }
   
    const feedback = turn.giveFeedback()
    
    return feedback
  }
}

module.exports = Round