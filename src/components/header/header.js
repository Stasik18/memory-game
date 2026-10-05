import style from './header.module.css'
export class Header {
  constructor() {
    this.element = document.createElement('header')
    this.element.className = style['header']
    this.newGameBtn = document.createElement('button')
    this.leadersBtn = document.createElement('button')
    this.newGameBtn.textContent = 'Новая игра'
    this.leadersBtn.textContent = 'Таблица лидеров'
    this.newGameBtn.setAttribute('aria-label', 'Начать новую игру')
    this.leadersBtn.setAttribute('aria-label', 'Открыть таблицу лидеров')
    this.onNewGame = () => {}
    this.onShowLeaders = () => {}
    this.element.append(this.newGameBtn, this.leadersBtn)

    this.newGameBtn.addEventListener('click', () => this.onNewGame())
    this.leadersBtn.addEventListener('click', () => this.onShowLeaders())
  }
}
