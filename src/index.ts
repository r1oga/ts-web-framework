import { User } from './models/User'

const user = new User({ name: 'r1oga', age: 100 })
const cs = () => {
  console.log('hello')
}
user.on('test', cs)

user.events.test[0]()
