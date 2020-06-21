import { User } from './models/User.ts'
;(async () => {
  const user = new User({ id: 2, name: 'newuser' })
  user.on('change', () => console.log('changed!!'))
  user.trigger('change')
})()
