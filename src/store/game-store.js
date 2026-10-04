import { CARDS } from '@/data/cards'

export const generateUid = () => {
  return Math.random().toString(36).substring(2, 10)
}

const shuffle = (array) => {
  let m = array.length,
    t,
    i

  while (m) {
    i = Math.floor(Math.random() * m--)

    t = array[m]
    array[m] = array[i]
    array[i] = t
  }

  return array
}

const createGameCard = () => {
  const array = shuffle([...CARDS, ...CARDS])

  return array.map((elem, index) => {
    return {
      ...elem,
      uid: generateUid() + index,
      isFlipped: false,
      isMatched: false,
    }
  })
}

export class GameStore {
  constructor() {
    this.cards = createGameCard()
    this.moves = 0
    this.matchPairs = 0
    this.firstCard = null
    this.secondCard = null
    this.isLocked = false
    this.isGameOver = false
    this.listeners = []
    this.timerId = null
  }
  getState() {
    return {
      cards: this.cards,
      moves: this.moves,
      matchedPairs: this.matchPairs,
      isLocked: this.isLocked,
      isGameOver: this.isGameOver,
    }
  }

  subscribe(listener) {
    this.listeners = [...this.listeners, listener]
  }

  notify() {
    this.listeners.forEach((listener) => listener(this.getState()))
  }

  startGame() {
    clearTimeout(this.timerId)
    this.timerId = null
    this.firstCard = null
    this.secondCard = null
    this.isLocked = false
    this.isGameOver = false
    this.cards = createGameCard()
    this.notify()
  }

  flipCard(uid) {
    if (this.isLocked) return
    if (this.isGameOver) return

    const currentCard = this.cards.find((card) => card.uid === uid)
    if (currentCard.isMatched) return
    if (currentCard.isFlipped) return

    if (this.firstCard === null) {
      this.firstCard = currentCard
      currentCard.isFlipped = true
      this.notify()
      return
    } else {
      this.secondCard = currentCard
      currentCard.isFlipped = true
      this.moves++
      if (this.firstCard.id === this.secondCard.id) {
        this.firstCard.isMatched = true
        this.secondCard.isMatched = true

        this.matchPairs++

        this.firstCard = null
        this.secondCard = null
        if (this.matchPairs === 8) {
          this.isGameOver = true
        }
        this.notify()
        return
      } else {
        this.isLocked = true
        this.notify()
        this.timerId = setTimeout(() => this.closeUnmatched(), 1000)
      }
    }
  }

  closeUnmatched() {
    this.firstCard.isFlipped = false
    this.secondCard.isFlipped = false

    this.firstCard = null
    this.secondCard = null

    this.isLocked = false
    this.timerId = null

    this.notify()
  }
}
