import { UserProps, Callback } from './interfaces.ts'
import { Eventing } from './Eventing.ts'
import { Sync } from './Sync.ts'
import { API_URL } from '../config.js'

export class User {
  public events: Eventing = new Eventing()
  public sync: Sync<UserProps> = new Sync<UserProps>(API_URL)

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

  save(): void {
    const id = this.get('id')
    this.sync.save(this.data, id)
  }

  async fetch(id: number): Promise<void> {
    this.set(await this.sync.fetch(id))
  }
}
