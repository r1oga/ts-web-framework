import { User } from './models/User.ts'
;(async () => {
  const user = new User({ id: 2 })
  await user.fetch()
  user.set({ name: 'retest', age: 39 })
  await user.save()
  const newUser = new User({ name: 'new user' })
  await newUser.save()
})()
