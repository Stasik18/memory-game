import style from './winner-modal.module.css'

export class WinnerModal {
  constructor() {
    this.element = document.createElement('div')
    this.element.className = style['winner-modal']
    this.title = document.createElement('h2')
    this.title.textContent = 'Поздравляем! Вы нашли все пары!'
    this.title.className = style['title']
    this.infoPanel = document.createElement('p')
    this.infoPanel.className = style['info-panel']
    this.actionPanel = document.createElement('div')
    this.actionPanel.className = style['action-panel']
    this.newGameBtn = document.createElement('button')
    this.newGameBtn.className = style['new-game-btn']
    this.newGameBtn.textContent = 'Новая игра'
    this.newGameBtn.setAttribute('aria-label', 'Начать новую игру')
    this.closeModalBtn = document.createElement('button')
    this.closeModalBtn.className = style['close-modal-btn']
    this.closeModalBtn.textContent = 'Закрыть'
    this.closeModalBtn.setAttribute('aria-label', 'Закрыть окно конца игры')

    this.element.append(this.title, this.infoPanel, this.actionPanel)
    this.actionPanel.append(this.newGameBtn, this.closeModalBtn)

    this.onNewGame = () => {}
    this.onClose = () => {}

    this.newGameBtn.addEventListener('click', () => this.onNewGame())
    this.closeModalBtn.addEventListener('click', () => this.onClose())
  }

  update(moves) {
    this.infoPanel.textContent = `Количество затраченных ходов - ${moves}`
  }
}
