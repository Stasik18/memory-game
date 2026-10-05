import { Card } from '@/components'
import style from './playing-field.module.css'

export class PlayingField {
  constructor(store) {
    this.store = store
    this.cardByElement = new Map()
    this.element = document.createElement('ul')
    this.element.className = style['playing-field']
  }

  createCards() {
    this.cardByElement.clear()
    this.element.replaceChildren()
    this.store.getState().cards.forEach((cardData) => {
      const cardInstance = new Card(cardData)
      this.element.append(cardInstance.element)
      this.cardByElement.set(cardInstance.element, cardInstance)
    })
  }

  render() {
    this.createCards()

    this.element.addEventListener('click', (e) => this.handleClick(e))

    this.store.subscribe((state) => {
      const oldUid = this.cardByElement.values().next().value?.card.uid
      const newUid = state.cards[0].uid

      if (oldUid !== newUid) {
        this.createCards()
      } else {
        for (const card of this.cardByElement.values()) {
          card.render()
        }
      }
    })
  }

  handleClick(event) {
    const clickCard = event.target.closest('li')

    if (!clickCard) return
    console.log(this.cardByElement.get(clickCard).card)

    this.store.flipCard(this.cardByElement.get(clickCard).card.uid)
  }
}
