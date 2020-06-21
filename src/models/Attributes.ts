export class Attributes<T> {
  constructor(private data: T) {}

  // K can only be one of the key of T
  // T[K] is the value's type of the key (of type)
  // needs to be bound (arrow function)
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key]
  }

  set = (update: T): void => {
    Object.assign(this.data, update)
  }
}
