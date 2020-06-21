import { User } from './models/User.ts'
;(async () => {
  // const user = new User({ id: 0, name: 'newuser' })
  // console.log(user.get('name'))
  //
  // user.on('change', () => console.log('changed!'))
  // user.trigger('change')
  //
  // await user.save()
  const user = new User({ id: 1 })
  await user.fetch()
  console.log(user.get('name'))
  user.set({ age: 50 })
  await user.save()
})()
