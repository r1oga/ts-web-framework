import { UserProps } from './interfaces.ts'

interface HasId {
  id?: number
}
/*
  design options:
  1 sync methods gets User props as arguments (id and data).
    --> sync is not resuable: would only work with User class
  2 use serializable (convert data into saveable (e.g json) format)
  and deserializable (put data on an object using some previously saved data (json))
  interfaces to gatekeep sync
  --> we loose some type safety (we don't know what we pass to serialize function)
  3 Use Generic Sync class
*/
export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  //  fetch data from server
  async fetch(id: number): Promise<T> {
    const res = await fetch(`${this.rootUrl}/${id}`)
    const data = (await res.json()) as T
    return data
  }

  // store user data on server
  async save(data: T): Promise<Response> {
    const { id } = data
    if (id) {
      return fetch(`${this.rootUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
    } else {
      return fetch(this.rootUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
    }
  }
}
