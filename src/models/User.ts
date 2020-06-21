import { UserProps, Callback } from './interfaces.ts'
import { Eventing } from './Eventing.ts'
import { Sync } from './Sync.ts'
import { Attributes } from './Attributes.ts'
import { API_URL } from '../config.js'

export class User {
  public events: Eventing = new Eventing()
  public sync: Sync<UserProps> = new Sync<UserProps>(API_URL)
  public attributes: Attributes<UserProps>

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs)
  }

  get get() {
    return this.attributes.get
  }

  set(update: UserProps) {
    this.attributes.set(update)
    this.events.trigger('change')
  }

  get on() {
    return this.events.on
  }

  // returns reference to events.trigger function
  get trigger() {
    return this.events.trigger
  }

  async save(): Promise<void> {
    const id = this.get('id')
    const name = this.get('name')
    const age = this.get('age')
    this.sync.save({ id, name, age })
  }

  async fetch(): Promise<void> {
    const id = this.get('id')
    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id')
    }
    this.set(await this.sync.fetch(id))
  }
}
