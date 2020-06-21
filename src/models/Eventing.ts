import { Callback } from './interfaces.ts'

export class Eventing {
  events: { [key: string]: Callback[] } = {}

  // needs to be bound (arrow function)
  on = (eventName: string, cb: Callback): void => {
    const handlers = this.events[eventName] || []
    handlers.push(cb)
    this.events[eventName] = handlers
  }

  // needs to be bound (arrow function)
  trigger = (eventName: string): void => {
    this.events[eventName]?.forEach(cb => cb())
  }
}
