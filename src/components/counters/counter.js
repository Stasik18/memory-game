import style from './counter.module.css'

export class Counter {
  constructor(store) {
    this.store = store
    this.state = store.getState()
    this.element = document.createElement('div')
    this.element.className = style['counter']
    this.matched = document.createElement('div')
    this.matched.className = style['matched']
    this.moves = document.createElement('div')
    this.moves.className = style['moves']
    this.update(this.state)
    this.element.append(this.matched, this.moves)
  }

  update(state) {
    this.moves.textContent = `Ходы: ${state.moves}`
    this.matched.textContent = `Пары: ${state.matchedPairs} / 8`
  }

  render() {
    this.store.subscribe((state) => {
      this.update(state)
    })
  }
}
