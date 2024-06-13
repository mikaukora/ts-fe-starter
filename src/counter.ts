import { StateCallback, Component } from './types'

class Counter implements Component {
  id: string

  state = {
    count: 0,
    increment: () => {
      this.setState(() => this.state.count++)
    },
    decrement: () => {
      this.setState(() => this.state.count--)
    }
  }

  constructor(id: string) {
    this.id = id
  }

  setState(callback: StateCallback) {
    callback()
    this.updateTree()
  }

  updateTree() {
    console.log(`counter - updateTree, ${this.id}`)
    document.getElementById(this.id).innerHTML = this.render()
    document.getElementById(`${this.id}-dec-button`).addEventListener('click', this.state.decrement)
    document.getElementById(`${this.id}-inc-button`).addEventListener('click', this.state.increment)
  }

  render() {
    return `
      <div class="counter-container">
      <button id="${this.id}-dec-button">&#10134;</button>
      <button id="${this.id}-inc-button">&#10133;</button>
      <div class="counter">${this.state.count}</div>
      </div>
      `
  }
}

export { Counter }
