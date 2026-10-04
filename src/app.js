import { BackgroundLayer, PlayingField, Header } from '@/components'
import { GameStore } from '@/store'
export class App {
  constructor(root) {
    this.root = root
  }

  mount() {
    this.bg = new BackgroundLayer()
    this.store = new GameStore()
    this.header = new Header()

    this.field = new PlayingField(this.store)
    this.field.render()
    this.root.append(this.bg.element, this.header.element, this.field.element)
  }
}
