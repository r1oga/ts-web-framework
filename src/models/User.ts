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

  get set() {
    return this.attributes.set
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
    this.set(await this.sync.fetch(this.get('id') as number))
  }
}
