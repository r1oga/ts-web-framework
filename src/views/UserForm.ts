/// <reference lib="dom" />
import { User } from '../models/User.ts'
import { UserProps } from '../models/interfaces.ts'
import { View } from './View.ts'

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:#set-age': this.onSetAgeClick,
      'click:#set-name': this.onSetNameClick,
      'click:#save': this.onSaveClick
    }
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  onSaveClick = (): void => {
    this.model.save()
  }

  onSetNameClick = (): void => {
    // can't use event object, need to reach into the DOM
    const input = this.parent.querySelector('input')

    // type guard
    if (input) {
      const name = input.value
      this.model.set({ name }) // triggers a change event and re redering via bindModel
    }
  }

  // generate HTML string
  template(): string {
    return `
    <div>
      <input placeholder='${this.model.get('name')}'/>
      <button id='set-name'>Change name</button>
      <button id='set-age'>Set random age</button>
      <button id='save'>Save User</button>
    </div>
    `
  }
}
