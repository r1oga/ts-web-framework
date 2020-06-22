import { Collection } from './models/Collection.ts'
import { User } from './models/User.ts'
import { UserProps } from './models/interfaces.ts'
import { API_URL } from './config.js'
;(async () => {
  const userCollection = new Collection<User, UserProps>(API_URL, json =>
    User.buildUser(json)
  )
  userCollection.on('change', () => console.log('changed'))
  await userCollection.fetch()
  console.log(userCollection.models)
})()
