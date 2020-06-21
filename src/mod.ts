import { User } from './models/User.ts'
;(async () => {
  // const user = new User({ id: 0, name: 'newuser' })
  // console.log(user.get('name'))
  //
  // user.trigger('change')
  //
  // await user.save()
  const user = new User({ name: 'user', age: 45 })
  user.on('change', () => {
    console.log('changed!')
  })
  // await user.fetch()
  // console.log(user.get('name'))
  user.set({ age: 1000 })
  // await user.save()
})()
