import style from './card.module.css'
import BACK_CARD from '@/assets/img/background-card.webp'

export class Card {
  constructor(card) {
    this.card = card
    this.element = document.createElement('li')

    this.element.className = style['list-item']
    this.element.dataset.uid = this.card.uid

    this.cardInner = document.createElement('div')
    this.cardInner.className = style['card-inner']
    this.element.append(this.cardInner)

    this.img1 = document.createElement('img')
    this.img2 = document.createElement('img')

    this.cardInner.append(this.img1, this.img2)

    this.img1.className = style['img-back']
    this.img1.src = BACK_CARD
    this.img1.width = '200'
    // this.img1.fetchpriority = "high"

    this.img2.className = style['img-content']
    this.img2.src = this.card.image
    this.img2.width = '200'
  }

  render() {
    this.element.classList.toggle(style['is-flipped'], this.card.isFlipped)
    this.element.classList.toggle(style['is-matched'], this.card.isMatched)
  }

  close(){
      this.element.classList.remove(style['is-flipped'])
  }
}
