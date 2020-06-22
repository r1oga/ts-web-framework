import { Callback, Events, ModelAttributes, Sync, HasId } from './interfaces.ts'

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  /*
  get get() {
    return this.attributes.get
  }
  equivalent to the above: method pass through
  Don't work if we are assigning properties inside the constructor:
    constructor (attrs: ModelAttributes<T>) {
      this.attributes = new ModelAttributes<T>
    }
  --> this.get would be assigned before this.attributes
  we would try to access this.attributes before it has been initialized
  Works only if we use a the modifier shorten syntax
    constructor(private attributes: ModelAttributes<T>) {
  */
  get = this.attributes.get

  set(update: T) {
    this.attributes.set(update)
    this.events.trigger('change')
  }

  on = this.events.on

  // returns reference to events.trigger function
  trigger = this.events.trigger

  async save(): Promise<void> {
    try {
      await this.sync.save(this.attributes.getAll())
      this.events.trigger('save')
    } catch {
      this.events.trigger('error')
    }
  }

  async fetch(): Promise<void> {
    const id = this.get('id')
    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id')
    }
    this.set(await this.sync.fetch(id))
  }
}
