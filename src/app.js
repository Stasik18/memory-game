import { BackgroundLayer, PlayingField, Header, Main } from '@/components'
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
    this.field = new PlayingField(this.store)
    this.field.render()
    this.main.element.append(this.header.element, this.field.element)
    this.root.append(this.bg.element, this.main.element)

    this.header.onNewGame = () => {
      console.log('new game clicked')
      this.store.startGame()
    }
  }
}
