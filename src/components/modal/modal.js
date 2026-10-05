import style from './modal.module.css'

export class Modal {
  constructor() {
    this.modal = document.createElement('div')
    this.modal.className = style['modal']
    this.backdrop = document.createElement('div')
    this.backdrop.className = style['backdrop']
    this.backdrop.append(this.modal)
    document.body.append(this.backdrop)

    this.handleBackdropClick = (event) => {
      if (event.target === this.backdrop) this.close()
    }
  }

  open(content) {
    this.modal.replaceChildren()
    this.modal.append(content)
    this.modal.classList.add(style['open'])
    this.backdrop.classList.add(style['open'])
    document.addEventListener('keydown', this.handleEscape)
    this.backdrop.addEventListener('click', this.handleBackdropClick)
  }

  close() {
    this.modal.classList.remove(style['open'])
    this.backdrop.classList.remove(style['open'])
    document.removeEventListener('keydown', this.handleEscape)
    this.backdrop.removeEventListener('click', this.handleBackdropClick)
  }

  handleEscape = (e) => {
    if (e.key === 'Escape') {
      this.close()
    }
  }
}
