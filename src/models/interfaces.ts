export interface UserProps {
  name?: string
  age?: number
  id?: number
}

export type Callback = () => void

export interface ModelAttributes<T> {
  set(value: T): void
  getAll(): T
  get<K extends keyof T>(key: K): T[K]
}

export interface Events {
  on(eventName: string, cb: Callback): void
  trigger(eventName: string): void
}

export interface Sync<T> {
  fetch(id: number): Promise<T>
  save(data: T): Promise<Response>
}

export interface HasId {
  id?: number
}
