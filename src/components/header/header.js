import style from './header.module.css'
import { Counter } from '@/components'
export class Header {
  constructor(store) {
    this.element = document.createElement('header')
    this.element.className = style['header']
    this.newGameBtn = document.createElement('button')
    this.leadersBtn = document.createElement('button')
    this.newGameBtn.textContent = 'Новая игра'
    this.leadersBtn.textContent = 'Таблица лидеров'
    this.onNewGame = () => {}
    this.onShowLeaders = () => {}

    this.element.append(this.newGameBtn, this.leadersBtn, new Counter())

    this.newGameBtn.addEventListener('click', () => this.onNewGame())
    this.leadersBtn.addEventListener('click', this.onShowLeaders)
  }
}
