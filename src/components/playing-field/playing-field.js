import { Card } from '@/components'

export class PlayingField {
  constructor(store) {
    this.store = store
    this.cardByElement = new Map()
    this.element = document.createElement('div')
    this.element.className = 'playing-field'
  }

  render() {
    this.store.getState().cards.forEach((cardData) => {
      const cardInstance = new Card(cardData)
      this.element.append(cardInstance.element)
      this.cardByElement.set(cardInstance.element, cardInstance)
    })
  }
}
