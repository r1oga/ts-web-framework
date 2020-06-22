import { User } from '../models/User.ts'

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover
    }
  }

  onButtonClick(): void {
    console.log('Hello')
  }

  onHeaderHover(): void {
    console.log('Hovered')
  }

  // generate HTML string
  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <div>User Name: ${this.model.get('name')}</div>
      <div>User Age: ${this.model.get('age')}</div>
      <input />
      <button>click me</button>
    </div>
    `
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
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    this.bindEvents(templateElement.content)
    this.parent.append(templateElement.content)
  }
}