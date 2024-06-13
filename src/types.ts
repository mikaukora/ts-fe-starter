export type StateCallback = () => void

export interface Component {
  render(): string
  updateTree(): void
}

export interface ComponentConstuctor {
  new (id: string): Component
}
