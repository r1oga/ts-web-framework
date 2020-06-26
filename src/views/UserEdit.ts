import { View } from './View.ts'
import { UserForm } from './UserForm.ts'
import { UserShow } from './UserShow.ts'
import { User } from '../models/User.ts'
import { UserProps } from '../models/interfaces.ts'

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form'
    }
  }

  onRender(): void {
    new UserShow(this.regions.userShow, this.model).render()
    new UserForm(this.regions.userForm, this.model).render()
  }

  template(): string {
    return `
    <div>
      <div class='user-show'></div>
      <div class='user-form'></div>
    </div>
    `
  }
}
