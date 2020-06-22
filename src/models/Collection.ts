import { Eventing } from './Eventing.ts'

export class Collection<T, K> {
  models: T[] = []
  events: Eventing = new Eventing()

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}
  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  async fetch(): Promise<void> {
    const res = await fetch(this.rootUrl)
    const users = await res.json()
    users.forEach((data: K) => {
      this.models.push(this.deserialize(data))
    })

    this.trigger('change')
  }
}
