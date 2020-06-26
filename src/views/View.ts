import { Model } from '../models/Model.ts'

// generic class with generic constraint
export abstract class View<T extends Model<K>, K> {
  constructor(public parent: Element, public model: T) {
    this.bindModel()
  }

  abstract template(): string

  regions: { [key: string]: Element } = {}

  regionsMap(): { [key: string]: string } {
    return {}
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap()

    for (let key in regionsMap) {
      const selector = regionsMap[key]
      const element = fragment.querySelector(selector)
      if (element) {
        this.regions[key] = element
      }
    }
  }

  // eventsMap does not necessarily need to be implemented
  eventsMap(): { [key: string]: () => void } {
    return {}
  }

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

  onRender(): void {
    this.parent.innerHTML = ''
  }
  // add template HTML string to parent
  render(): void {
    this.parent.innerHTML = ''
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    this.bindEvents(templateElement.content)
    this.mapRegions(templateElement.content)

    // nest elements
    this.onRender()
    this.parent.append(templateElement.content)
  }
}
