import { Model } from './Model.ts'
import { UserProps } from './interfaces.ts'
import { Attributes } from './Attributes.ts'
import { ApiSync } from './ApiSync.ts'
import { Eventing } from './Eventing.ts'
import { API_URL } from '../config.js'

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(API_URL)
    )
  }
}
