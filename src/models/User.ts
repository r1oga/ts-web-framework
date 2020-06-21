import { UserProps, Callback } from './interfaces.ts'
import { API_URL } from '../config.js'
import { Eventing } from './Eventing.ts'

export class User {
  public events: Eventing = new Eventing()

  constructor(private data: UserProps) {}

  //  get single piece of info about user
  get(propName: keyof UserProps): string | number | void {
    return this.data[propName]
  }

  on(eventName: string, cb: Callback): void {
    this.events.on(eventName, cb)
  }

  trigger(eventName: string): void {
    this.events.trigger(eventName)
  }
  //  change user info
  set(update: UserProps): void {
    Object.assign(this.data, update)
  }

  //  fetch data from server
  async fetch() {
    const res = await fetch(`${API_URL}users/${this.get('id')}`)
    const data = await res.json()
    this.set(data)
  }

  // store user data on server
  async save() {
    const id = this.get('id')
    if (id) {
      const id = this.get('id')
      await fetch(`${API_URL}users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.data)
      })
    } else {
      await fetch(`${API_URL}users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.data)
      })
    }
  }
}
