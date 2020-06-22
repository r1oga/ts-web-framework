import { UserForm } from './views/UserForm.ts'
import { User } from './models/User.ts'

const user = User.buildUser({ name: 'r1oga', age: 20 })
const userForm = new UserForm(document.getElementById('root'), user)

userForm.render()
