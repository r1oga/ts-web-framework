import { UserForm } from './views/UserForm.ts'
import { UserEdit } from './views/UserEdit.ts'
import { User } from './models/User.ts'

const user = User.buildUser({ name: 'r1oga', age: 20 })

const root = document.getElementById('root')

// type guard
if (root) {
  const userEdit = new UserEdit(root, user)
  userEdit.render()
  console.log(userEdit)
} else {
  throw new Error('Root element not found')
}
