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

  calculatePercentCorrect() {
    const totalGuesses = this.turns
    const incorrectGuesses = this.incorrectGuesses.length
    const numberCorrect = totalGuesses - incorrectGuesses
    
    return (numberCorrect/totalGuesses)*100
  }
}

module.exports = Round