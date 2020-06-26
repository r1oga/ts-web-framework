import { UserList } from './views/UserList.ts'
import { Collection } from './models/Collection.ts'
import { UserProps } from './models/interfaces.ts'
import { User } from './models/User.ts'
import { API_URL } from './config.js'

const users = new Collection(API_URL, (json: UserProps) => {
  return User.buildUser(json)
})

users.on('change', () => {
  const root = document.getElementById('root')

  if (root) {
    new UserList(root, users).render()
  }
})
users.fetch()
