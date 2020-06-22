import { User } from './User.ts'
import { UserProps } from './interfaces.ts'
import { Eventing } from './Eventing.ts'

export class Collection {
  models: User[] = []
  events: Eventing = new Eventing()

  constructor(public rootUrl: string) {}
  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  async fetch(): Promise<void> {
    const res = await fetch(this.rootUrl)
    const users = await res.json()
    users.forEach((data: UserProps) => {
      const user = User.buildUser(data)
      this.models.push(user)
    })

    this.trigger('change')
  }
}
