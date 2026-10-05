import {
  BackgroundLayer,
  PlayingField,
  Header,
  Main,
  Counter,
  Modal,
  WinnerModal,
  LeaderboardModal,
} from '@/components'
import { GameStore, Leaderboard } from '@/store'
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
    this.isWinnerModalOpen = false
    this.winnerModal = new WinnerModal()
    this.leaderboard = new Leaderboard()
    this.leaderboardModal = new LeaderboardModal(this.leaderboard)
    this.modal = new Modal()

    this.leaderboardModal.onClose = () => this.modal.close()

    this.winnerModal.onClose = () => {
      this.isWinnerModalOpen = false
      this.modal.close()
    }
    this.winnerModal.onNewGame = () => {
      this.winnerModal.onClose()
      this.store.startGame()
    }
    this.header.onShowLeaders = () => {
      console.log(12)
      this.leaderboardModal.update()
      this.modal.open(this.leaderboardModal.element)
    }

    this.store.subscribe((state) => {
      if (state.isGameOver && !this.isWinnerModalOpen) {
        console.log(this.winnerModal)
        this.winnerModal.update(state.moves)
        this.leaderboard.addResult({ moves: state.moves, date: Date.now() })
        this.modal.open(this.winnerModal.element)
        this.isWinnerModalOpen = true
      }
    })

    this.header.element.insertBefore(
      this.counter.element,
      this.header.leadersBtn
    )
    this.main.element.append(this.header.element, this.field.element)
    this.root.append(this.bg.element, this.main.element)
  }
}
