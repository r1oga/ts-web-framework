import { User } from './models/User.ts'
;(async () => {
  // await fetch(`${API_URL}users`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     name: 'r1oga',
  //     age: 50
  //   })
  // })

  const user = new User({ id: 1 })
  console.log(user.get('name'))
  await user.fetch()
  console.log(user.get('name'))
})()
