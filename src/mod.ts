import { User } from './models/User.ts'
;(async () => {
  const user = new User({ id: 1, name: 'blabl', age: 12 })
  user.on('save', () => console.log('saved!'))

  user.save()
})()
