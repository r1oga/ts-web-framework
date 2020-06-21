import { Callback } from './interfaces.ts'

export class Eventing {
  events: { [key: string]: Callback[] } = {}

  on(eventName: string, cb: Callback): void {
    const handlers = this.events[eventName] || []
    handlers.push(cb)
    this.events[eventName] = handlers
  }

  trigger(eventName: string): void {
    this.events[eventName]?.forEach(cb => cb())
  }
}
