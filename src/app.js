import { BackgroundLayer, PlayingField, Header } from '@/components'

export class App {
  constructor(root) {
    this.root = root
  }

  mount() {
    this.bg = new BackgroundLayer()
    this.header = new Header()
    this.field = new PlayingField()

    this.root.append(this.bg.element, this.header.element, this.field.element)
  }
}
