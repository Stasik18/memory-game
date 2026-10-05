import style from './main.module.css'

export class Main {
  constructor() {
    this.element = document.createElement('main')
    this.element.className = style['main']
  }
}
