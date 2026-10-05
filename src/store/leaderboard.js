const STORAGE_KEY = 'leaderboard'
export class Leaderboard {
  constructor() {
    this.results = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  }

  addResult(newResult) {
    this.results = [...this.results, newResult]
    this.results = this.results
      .sort((a, b) => {
        if (a.moves === b.moves) return a.date - b.date
        return a.moves - b.moves
      })
      .slice(0, 10)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.results))
  }

  getResults() {
    return this.results
  }
}
