import { UserForm } from './views/UserForm.ts'
import { User } from './models/User.ts'

const user = User.buildUser({ name: 'r1oga', age: 20 })

const root = document.getElementById('root')

// type guard
if (root) {
  const userForm = new UserForm(root, user)
  userForm.render()
} else {
  throw new Error('Root element not found')
}
