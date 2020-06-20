import { User } from './models/User'

const user = new User({ name: 'r1oga', age: 100 })

console.log(user)
user.set({ name: 'mok' })
console.log(user.get('name'))
console.log(user.get('age'))
