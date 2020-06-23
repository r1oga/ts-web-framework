import { User } from '../models/User.ts'

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel()
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render()
    })
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:#set-age': this.onSetAgeClick,
      'click:#set-name': this.onSetNameClick
    }
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  onSetNameClick = (): void => {
    // can't use event object, need to reach into the DOM
    const input = this.parent.querySelector('input')
    const name = input.value
    this.model.set({ name }) // triggers a change event and re redering via bindModel
  }

  // generate HTML string
  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <div>User Name: ${this.model.get('name')}</div>
      <div>User Age: ${this.model.get('age')}</div>
      <input />
      <button id='set-name'>Change name</button>
      <button id='set-age'>Set random age</button>
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
    this.parent.innerHTML = ''
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    this.bindEvents(templateElement.content)
    this.parent.append(templateElement.content)
  }
}
