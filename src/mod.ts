import { User } from './models/User.ts'
;(async () => {
  const user = User.buildUser({ id: 1, name: 'blabl', age: 12 })
  user.on('change', () => console.log('changed!'))

  user.fetch()
})()
