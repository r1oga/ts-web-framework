import { User } from './models/User'

const user = new User({ name: 'r1oga', age: 100 })

user.on('test', () => console.log('test 1'))
user.on('test', () => console.log('test 2'))
user.on('hello', () => console.log('hello'))

// console.log(user)
user.trigger('test')
