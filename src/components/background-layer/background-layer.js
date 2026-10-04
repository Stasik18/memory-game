import styles from './background-layer.module.css'

export class BackgroundLayer {
  constructor() {
    this.element = document.createElement('div')
    this.element.className = styles['bg-layer']
  }
}
