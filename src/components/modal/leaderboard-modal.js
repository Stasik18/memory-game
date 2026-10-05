import style from './leaderboard-modal.module.css'

export class LeaderboardModal {
  constructor(leaderboard) {
    this.leaderboard = leaderboard

    this.element = document.createElement('div')
    this.element.className = style['leaderboard']

    this.title = document.createElement('h2')
    this.title.textContent = 'Таблица лидеров'
    this.title.className = style['title']

    this.list = document.createElement('div')
    this.list.className = style['list']

    this.closeBtn = document.createElement('button')
    this.closeBtn.textContent = 'Закрыть'
    this.closeBtn.className = style['close-btn']

    this.element.append(this.title, this.list, this.closeBtn)

    this.onClose = () => {}
    this.closeBtn.addEventListener('click', () => this.onClose())
  }

  update() {
    const results = this.leaderboard.getResults()
    this.list.replaceChildren()

    if (results.length === 0) {
      const empty = document.createElement('p')
      empty.textContent = 'Пока нет результатов'
      this.list.append(empty)
      return
    }

    results.forEach((result, index) => {
      const row = document.createElement('div')
      row.className = style['row']
      row.textContent = `${index + 1}. ${result.moves} ходов - ${this.formatDate(result.date)}`
      this.list.append(row)
    })
  }

  formatDate(timestamp) {
    const date = new Date(timestamp)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}.${month}.${year}`
  }
}
