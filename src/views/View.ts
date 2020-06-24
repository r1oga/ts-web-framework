import { Model } from '../models/Model.ts'

// generic class with generic constraint
export abstract class View<T extends Model<K>, K> {
  constructor(public parent: Element, public model: T) {
    this.bindModel()
  }

  abstract eventsMap(): { [key: string]: () => void }
  abstract template(): string

  bindModel(): void {
    this.model.on('change', () => {
      this.render()
    })
  }

  // bind event handlers
  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap()

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':')
      fragment.querySelectorAll(selector).forEach(el => {
        el.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }

  // add template HTML string to parent
  render(): void {
    this.parent.innerHTML = ''
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    this.bindEvents(templateElement.content)
    this.parent.append(templateElement.content)
  }
}
