const Turn = require("../src/Turn");

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard()
    const turn = new Turn(guess, currentCard)

    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard.id)
    }
    this.turns = this.turns + 1
    const feedback = turn.giveFeedback()

    return feedback
  }
}

module.exports = Round