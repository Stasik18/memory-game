import {
  BackgroundLayer,
  PlayingField,
  Header,
  Main,
  Counter,
} from '@/components'
import { GameStore } from '@/store'
export class App {
  constructor(root) {
    this.root = root
  }

  mount() {
    this.bg = new BackgroundLayer()
    this.main = new Main()
    this.store = new GameStore()
    this.header = new Header(this.store)
    this.header.onNewGame = () => {
      this.store.startGame()
    }
    this.field = new PlayingField(this.store)
    this.field.render()

    this.counter = new Counter(this.store)
    this.counter.render()

    this.header.element.append(this.counter.element)

    this.main.element.append(this.header.element, this.field.element)
    this.root.append(this.bg.element, this.main.element)
  }
}
