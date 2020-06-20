import { UserProps } from './interfaces'

export class User {
  constructor(private data: UserProps) {}

  //  get single piece of info about user
  get(propName: keyof UserProps): string | number | void {
    return this.data[propName]
  }

  //  change user info
  set(update: UserProps): void {
    Object.assign(this.data, update)
  }

  // /* register event handler with this object so that
  // other parts of the app know when something changes
  // */
  // on() {}
  //
  // /*
  //   trigger an event to tell other parts of the app
  //   that something has changed
  // */
  // trigger() {}
  //
  // //  fetch data from server about a user
  // fetch() {}
  //
  // // store user data on server
  // save() {}
}
